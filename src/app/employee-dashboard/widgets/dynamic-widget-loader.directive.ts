import {
  Directive,
  Input,
  NgModuleRef,
  ViewContainerRef,
  Injector,
  NgModuleFactoryLoader,
  Inject,
  NgModuleFactory,
  Compiler,
  Type
} from '@angular/core';
import { LAZY_MODULES, LAZY_MODULES_MAP } from "./dynamic-widget-provider";

@Directive({
  selector: '[loadModule]'
})
export class DynamicWidgetLoaderDirective {
  @Input('loadModule') moduleName: keyof LAZY_MODULES;
  private moduleRef: NgModuleRef<any>;

  constructor(
    private compiler: Compiler,
    private vcr: ViewContainerRef,
    private injector: Injector,
    // private loader: NgModuleFactoryLoader,
    @Inject(LAZY_MODULES_MAP) private modulesMap
  ) { }

  ngOnInit() {
    // this.loader
    //   .load(this.modulesMap[this.moduleName])
    //   .then((moduleFactory: NgModuleFactory<any>) => {
    //     this.moduleRef = moduleFactory.create(this.injector);
    //   });
    console.log(`module name: ${this.moduleName}, path: `, this.modulesMap[this.moduleName])
    this.loadModule(this.modulesMap[this.moduleName]);
  }

  private loadModule(path: any) {
    (path() as Promise<NgModuleFactory<any> | Type<any>>)
      .then(elementModuleOrFactory => {
        if (elementModuleOrFactory instanceof NgModuleFactory) {
          // if ViewEngine
          return elementModuleOrFactory;
        } else {
          try {
            // if Ivy
            return this.compiler.compileModuleAsync(elementModuleOrFactory);
          } catch (err) {
            throw err;
          }
        }
      })
      .then(moduleFactory => {
        try {
          const elementModuleRef = moduleFactory.create(this.injector);
          const moduleInstance = elementModuleRef.instance;
          // do something with the module...
          const rootComponent = moduleInstance.constructor.rootComponent;
          const factory = elementModuleRef.componentFactoryResolver.resolveComponentFactory(rootComponent);
          this.vcr.createComponent(factory);
        } catch (err) {
          throw err;
        }
      });
  }
}
