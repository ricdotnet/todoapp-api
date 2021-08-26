export function Model(name?: string): ClassDecorator {
  return function (target) {
    if(!name) {
      console.log(target.name)
    } else {
      console.log(name)
    }
  }
}

export function Column(values: Object): PropertyDecorator {
  return function (target: any, propertyKey: string | symbol) {
    console.log(propertyKey, values)
  }
}