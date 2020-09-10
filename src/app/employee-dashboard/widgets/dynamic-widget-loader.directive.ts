import {
  Directive,
  Input,
  ViewContainerRef,
  Injector,
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

  constructor(
    private compiler: Compiler,
    private vcr: ViewContainerRef,
    private injector: Injector,
    @Inject(LAZY_MODULES_MAP) private modulesMap
  ) { }

  ngOnInit() {
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
