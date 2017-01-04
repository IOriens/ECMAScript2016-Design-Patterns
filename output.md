
# AbstractFactory.js
```
'use strict'

class AbstractFactory {
  constructor () {
    console.log('AbstractFactory class created')
  }

  createProductA (product) {
    console.log('AbstractFactory.createProductA created')
  }

  createProductB (product) {
    console.log('AbstractFactory.createProductB created')
  }
}

class ConcreteFactory1 extends AbstractFactory {
  constructor () {
    super()
    console.log('ConcreteFactory1 class created')
  }

  createProductA (product) {
    console.log('ConcreteFactory1 createProductA')
    return new ProductA1()
  }

  createProductB (product) {
    console.log('ConcreteFactory1 createProductB')
    return new ProductB1()
  }
}

class ConcreteFactory2 extends AbstractFactory {
  constructor () {
    super()
    console.log('ConcreteFactory2 class created')
  }

  createProductA (product) {
    console.log('ConcreteFactory2 createProductA')
    return new ProductA2()
  }

  createProductB (product) {
    console.log('ConcreteFactory2 createProductB')
    return new ProductB2()
  }
}

class AbstractProductA {
  constructor () {
    console.log('AbstractProductA class created')
  }
}

class AbstractProductB {
  constructor () {
    console.log('AbstractProductB class created')
  }
}

class ProductA1 extends AbstractProductA {
  constructor () {
    super()
    console.log('ProductA1 class created')
  }
}

class ProductA2 extends AbstractProductA {
  constructor () {
    super()
    console.log('ProductA2 class created')
  }
}

class ProductB1 extends AbstractProductB {
  constructor () {
    super()
    console.log('ProductB1 class created')
  }
}

class ProductB2 extends AbstractProductB {
  constructor () {
    super()
    console.log('ProductB2 class created')
  }
}

var factory1 = new ConcreteFactory1()
var productB1 = factory1.createProductB()
var productA1 = factory1.createProductA()

var factory2 = new ConcreteFactory2()
var productA2 = factory2.createProductA()
var productB2 = factory2.createProductB()

```
# Adapter.js
```
'use strict'

class Target {
  constructor (type) {
    console.log('Target Class created!')
    let result

    switch (type) {
      case 'adapter':
        result = new AdapterImpl()
        break
      default:
        result = undefined
    }
    return result
  }

  request () {
    console.log('Target.request invoked')
  }
}

class Adapter {
  constructor () {
    console.log('Adapter Class created')
  }

  specificRequest () {
    console.log('Adapter.specificRequest invoked')
  }
}

class AdapterImpl extends Adapter {
  constructor () {
    super()
    console.log('AdapterImpl Class created')
  }

  request () {
    console.log('AdapterImpl.request invoked')
    return this.specificRequest()
  }
}

var f = new Target('adapter')
f.request()

```
# Bridge.js
```
'use strict'

class Abstraction {
  constructor () {
    console.log('Abstraction Class created')
  }

  operation () {
    console.log('Abstraction.operation invoked')
    this.imp.operationImp()
  }
}

class RefinedAbstraction extends Abstraction {
  constructor () {
    super()
    console.log('RefinedAbstraction Class created')
  }

  setImp (imp) {
    console.log('RefinedAbstraction.setImp invoked')
    this.imp = imp
  }
}

class Implementor {
  constructor () {
    console.log('Implementor Class created')
  }

  operationImp () {
    console.log('Implementor.operationImp invoked')
  }
}

class ConcreteImplementorA extends Implementor {
  constructor () {
    super()
    console.log('ConcreteImplementorA Class created')
  }

  operationImp () {
    console.log('ConcreteImplementorA.operationImp invoked')
  }
}

class ConcreteImplementorB extends Implementor {
  constructor () {
    super()
    console.log('ConcreteImplementorB Class created')
  }

  operationImp () {
    console.log('ConcreteImplementorB.operationImp invoked')
  }
}

var abstraction = new RefinedAbstraction()
abstraction.setImp(new ConcreteImplementorA())
abstraction.operation()
abstraction.setImp(new ConcreteImplementorB())
abstraction.operation()

```
# Builder.js
```
'use strict'

class Builder {
  constructor () {
    console.log('Builder Class created!')
  }

  buildPart (partName) {
    console.log('Builder.buildPart invoked!')
  }
}

class ConcreteBuilder extends Builder {
  constructor () {
    super()
    console.log('ConcreteBuilder Class created!')
  }

  buildPart (partName) {
    super.buildPart(partName)
    console.log('ConcreteBuilder.buildPart invoked!')
    this.product = new Product(partName)
  }
  getResult () {
    console.log('ConcreteBuilder.getResult invoked!')
    return this.product
  }
}

class Product {
  constructor (material) {
    console.log('Product class created')
    this.data = material
  }
}

class Director {
  constructor () {
    this.structure = ['Prod1', 'Prod2', 'Prod3']
    console.log('Director class created')
  }

  construct () {
    console.log('Director.Construct created')
    for (var prodName in this.structure) {
      let builder = new ConcreteBuilder()
      builder.buildPart(this.structure[prodName])
      builder.getResult()
    }
  }
}

let director = new Director()
director.construct()

```
# Chain of Responsibility.js
```
'use strict'
class Handler {
  constructor () {
    console.log('Handler Class created')
  }

  handleRequest () {
    console.log('Handler.handleRequest invoked')
  }
}

class ConcreteHandler1 extends Handler {
  constructor () {
    super()
    console.log('ConcreteHandler1 Class created')
  }

  setSuccessor (successor) {
    this.successor = successor
    console.log('ConcreteHandler1.setSuccessor invoked')
  }

  handleRequest (request) {
    console.log('ConcreteHandler1.handleRequest invoked')
    if (request === 'run') {
      console.log('ConcreteHandler1 has handled the request')
    } else {
      console.log('ConcreteHandler1 calls his successor')
      this.successor.handleRequest(request)
    }
  }
}

class ConcreteHandler2 extends Handler {
  constructor () {
    super()
    console.log('ConcreteHandler2 Class created')
  }

  handleRequest (request) {
    console.log('ConcreteHandler2.handleRequest invoked')
  }
}

let handle1 = new ConcreteHandler1()
let handle2 = new ConcreteHandler2()
handle1.setSuccessor(handle2)
handle1.handleRequest('run')
handle1.handleRequest('stay')

```
# Command.js
```
'use strict'

class Invoker {
  constructor () {
    console.log('Invoker Class created')
  }

  storeCommand (command) {
    this.command = command
    console.log('Invoker.storeCommand invoked')
  }
}

class Command {
  constructor () {
    console.log('Command Class created')
  }

  execute () {
    console.log('Command.execute invoked')
  }
}

class ConcreteCommand extends Command {
  constructor (receiver, state) {
    super()
    this.receiver = receiver
    console.log('ConcreteCommand Class created')
  }

  execute () {
    console.log('ConcreteCommand.execute invoked')
    this.receiver.action()
  }
}

class Receiver {
  constructor () {
    console.log('Receiver Class created')
  }

  action () {
    console.log('Receiver.action invoked')
  }
}

var invoker = new Invoker()
var receiver = new Receiver()
var command = new ConcreteCommand(receiver)
invoker.storeCommand(command)
invoker.command.execute()

```
# Composite.js
```
'use strict'

class Component {
  constructor () {
    console.log('Component Class created')
  }

  operation () {
    console.log('Component.operation invoked')
  }

  add (Component) {
    console.log('Component.add invoked')
  }

  remove (Component) {
    console.log('Component.remove invoked')
  }

  getChild (key) {
    console.log('Component.getChild invoked')
  }
}

class Leaf extends Component {
  constructor (name) {
    super()
    this.name = name
    console.log('Leaf Class created')
  }

  operation () {
    console.log('Leaf.operation invoked')
    console.log(this.name)
  }
}

class Composite extends Component {
  constructor (name) {
    super()
    this.name = name
    this.children = []
    console.log('Composite Class created')
  }

  operation () {
    console.log('Composite operation for: ' + this.name)
    for (var i in this.children) {
      this.children[i].operation()
    }
  }

  add (Component) {
    console.log('Composite.add invoked')
    this.children.push(Component)
  }

  remove (Component) {
    console.log('Composite.remove invoked')
    for (var i in this.children) {
      if (this.children[i] === Component) {
        this.children.splice(i, 1)
      }
    }
  }

  getChild (key) {
    console.log('Composite.getChild invoked')
    return this.children[key]
  }
}

var composite1 = new Composite('C1')
composite1.add(new Leaf('L1'))
composite1.add(new Leaf('L2'))
var composite2 = new Composite('C2')
composite2.add(composite1)
composite1.getChild(1).operation()
composite2.operation()

```
# Decorator.js
```
'use strict'

class Component {
  constructor () {
    console.log('Component Class created')
  }

  operation () {
    console.log('Component.operation invoked')
  }
}

class ConcreteComponent extends Component {
  constructor () {
    super()
    console.log('ConcreteComponent Class created')
  }

  operation () {
    console.log('ConcreteComponent.operation invoked')
  }
}

class Decorator extends Component {
  constructor (component) {
    super()
    this.component = component
    console.log('Decorator Class created')
  }

  operation () {
    console.log('Decorator.operation invoked')
    this.component.operation()
  }
}

class ConcreteDecoratorA extends Decorator {
  constructor (component, sign) {
    super(component)
    this.addedState = sign
    console.log('ConcreteDecoratorA Class created')
  }

  operation () {
    super.operation()
    console.log('ConcreteDecoratorA.operation invoked')
    console.log(this.addedState)
  }
}

class ConcreteDecoratorB extends Decorator {
  constructor (component, sign) {
    super(component)
    this.addedState = sign
    console.log('ConcreteDecoratorB Class created')
  }

  operation () {
    super.operation()
    console.log('ConcreteDecoratorB.operation invoked')
    console.log(this.addedState + this.addedState + this.addedState + this.addedState + this.addedState)
  }

  addedBehavior () {
    this.operation()
    console.log('ConcreteDecoratorB.operation invoked')
  }
}

var component = new ConcreteComponent()
var decoratorA = new ConcreteDecoratorA(component, 'decoratorA')
var decoratorB = new ConcreteDecoratorB(component, 'decoratorB')
console.log('component: ')
component.operation()
console.log('decoratorA: ')
decoratorA.operation()
console.log('decoratorB: ')
decoratorB.addedBehavior()

```
# Facade.js
```
'use strict'

class Facade {
  constructor () {
    console.log('Facade class created')
  }

  gotoPage (dp) {
    switch (dp) {
      case 'Facade':
        console.log('This is the Facade')
        break
      case 'AbstractFactory':
        console.log('This is the AbstractFactory')
        break
      case 'Builder':
        console.log('This is the Builder')
        break
      case 'Factory':
        console.log('This is the Factory')
        break
      case 'Prototype':
        console.log('This is the Prototype')
        break
      case 'Singleton':
        console.log('This is the Singleton')
        break
      case 'Adapter':
        console.log('This is the Adapter')
        break
      case 'Bridge':
        console.log('This is the Bridge')
        break
      case 'Composite':
        console.log('This is the Composite')
        break
      case 'Decorator':
        console.log('This is the Decorator')
        break
      case 'Flyweight':
        console.log('This is the Flyweight')
        break
      case 'Proxy':
        console.log('This is the Proxy')
        break
      case 'ChainofResponsibility':
        console.log('This is the ChainofResponsibility')
        break
      case 'Command':
        console.log('This is the Command')
        break
      case 'Interpreter':
        console.log('This is the Interpreter')
        break
      case 'Iterator':
        console.log('This is the Iterator')
        break
      case 'Mediator':
        console.log('This is the Mediator')
        break
      case 'Memento':
        console.log('This is the Memento')
        break
      case 'Observer':
        console.log('This is the Observer')
        break
      case 'State':
        console.log('This is the State')
        break
      case 'Strategy':
        console.log('This is the Strategy')
        break
      case 'TemplateMethod':
        console.log('This is the TemplateMethod')
        break
      case 'Visitor':
        console.log('This is the Visitor')
        break
      default:
        console.log('nothing to be matched')
    }
  }
}

let facade = new Facade()
facade.gotoPage('Facade')
facade.gotoPage('AbstractFactory')
facade.gotoPage('Builder')
facade.gotoPage('Factory')
facade.gotoPage('Prototype')
facade.gotoPage('Singleton')
facade.gotoPage('Adapter')
facade.gotoPage('Bridge')
facade.gotoPage('Composite')
facade.gotoPage('Decorator')
facade.gotoPage('Flyweight')
facade.gotoPage('Proxy')
facade.gotoPage('ChainofResponsibility')
facade.gotoPage('Command')
facade.gotoPage('Interpreter')
facade.gotoPage('Iterator')
facade.gotoPage('Mediator')
facade.gotoPage('Memento')
facade.gotoPage('Observer')
facade.gotoPage('State')
facade.gotoPage('Strategy')
facade.gotoPage('TemplateMethod')
facade.gotoPage('Visitor')

```
# Factory.js
```
'use strict'

class Product {
  constructor () {
    console.log('Product Class created')
  }
}

class ConcreteProduct extends Product {
  constructor () {
    super()
    console.log('ConcreteProduct Class created')
  }
}

class Creator {
  constructor () {
    console.log('Creator Class created')
  }

  factoryMethod () {
    console.log('Creator.factoryMethod created')
  }

  anOperation () {
    console.log('Creator.anOperation created')
    this.product = this.factoryMethod()
    console.log(this.product instanceof ConcreteProduct)
  }
}

class ConcreteCreator extends Creator {

  constructor () {
    super()
    console.log('ConcreteCreator Class created')
  }

  factoryMethod () {
    return new ConcreteProduct()
  }
}

var factory = new ConcreteCreator()
factory.anOperation()

```
# Flyweight.js
```
'use strict'

class FlyweightFactory {
  constructor () {
    this.flyweights = {}
    console.log('FlyweightFactory Class created')
  }

  getFlyweight (key) {
    console.log('FlyweightFactory.getFlyweight invoked')
    if (this.flyweights[key]) {
      return this.flyweights[key]
    } else {
      this.flyweights[key] = new ConcreteFlyweight(key)
      return this.flyweights[key]
    }
  }

  createGibberish (keys) {
    console.log('FlyweightFactory.createGibberish invoked')
    return new UnsharedConcreteFlyweight(keys, this)
  }
}

class Flyweight {
  constructor () {
    console.log('Flyweight Class created')
  }

  operation (extrinsicState) {
    console.log('Flyweight.operation invoked')
  }
}

class ConcreteFlyweight extends Flyweight {
  constructor (key) {
    super()
    this.intrinsicState = key
    console.log('ConcreteFlyweight Class created')
  }

  operation (extrinsicState) {
    console.log('ConcreteFlyweight.operation invoked')
    return extrinsicState + this.intrinsicState
  }
}

class UnsharedConcreteFlyweight extends Flyweight {
  constructor (keys, flyweights) {
    super()
    this.flyweights = flyweights
    this.keys = keys
    console.log('UnsharedConcreteFlyweight Class created')
  }

  operation (extrinsicState) {
    console.log('UnsharedConcreteFlyweight.operation invoked')
    var key, word = ''
    for (var i = 0; i < extrinsicState; i++) {
      key = this.keys[Math.floor(Math.random() * (this.keys.length))]
      word = this.flyweights.getFlyweight(key).operation(word)
    }
    console.log('UnsharedConcreteFlyweight Operation: ')
    console.log(word)
  }
}

var flyweights = new FlyweightFactory()
var gibberish = flyweights.createGibberish(['-', '+', '*'])
gibberish.operation(5)

```
# Interpreter.js
```
'use strict'

class Context {
  constructor (input) {
    this.sum = 0
    this.list = []
    console.log('Context Class created')
  }

  add (eps) {
    console.log('Context.add invoked')
    this.list.push(eps)
  }

  getList () {
    console.log('Context.getList invoked')
    return this.list
  }

  getSum () {
    console.log('Context.getSum invoked')
    return this.sum
  }

  setSum (_sum) {
    this.sum = _sum
    console.log('Context.setSum invoked')
  }
}

class AbstractExpression {
  constructor () {
    console.log('AbstractExpression Class created')
  }

  interpret (context) {
    console.log('AbstractExpression.interpret invoked')
  }
}

class PlusExpression extends AbstractExpression {
  constructor (name) {
    super()
    this.name = name
    console.log('PlusExpression Class created')
  }

  interpret (context) {
    console.log('PlusExpression.interpret invoked')
    var sum = context.getSum()
    sum++
    context.setSum(sum)
  }
}

class MinusExpression extends AbstractExpression {
  constructor () {
    super()
    this.name = '+'
    console.log('MinusExpression Class created')
  }

  interpret (context) {
    console.log('MinusExpression.interpret invoked')
    var sum = context.getSum()
    sum--
    context.setSum(sum)
  }
}

var context = new Context()
context.setSum(20)

context.add(new PlusExpression())
context.add(new PlusExpression())
context.add(new PlusExpression())

context.add(new MinusExpression())
context.add(new MinusExpression())

var list = context.getList()
for (var i = 0; i < list.length; i++) {
  var expression = list[i]
  expression.interpret(context)
}

console.log('Result：' + context.getSum())

```
# Iterator.js
```
'use strict'

class Iterator {
  constructor () {
    console.log('Iterator Class created')
  }

  first () {
    console.log('Iterator.first invoked')
  }

  next () {
    console.log('Iterator.next invoked')
  }

  isDone () {
    console.log('Iterator.isDone invoked')
  }

  currentItem () {
    console.log('Iterator.currentItem invoked')
  }
}

class ConcreteIterator extends Iterator {
  constructor (aggregate) {
    super()
    this.index = 0
    this.aggregate = aggregate
    console.log('ConcreteIterator Class created')
  }

  first () {
    console.log('ConcreteIterator.first invoked')
    return this.aggregate.list[0]
  }

  next () {
    console.log('ConcreteIterator.next invoked')
    this.index += 1
    return this.aggregate.list[this.index]
  }

  currentItem () {
    console.log('ConcreteIterator.currentItem invoked')
    return this.aggregate.list[this.index]
  }
}

class Aggregate {
  constructor () {
    console.log('Aggregate Class created')
  }

  createIterator () {
    console.log('Aggregate.CreateIterator invoked')
  }
}

class ConcreteAggregate extends Aggregate {
  constructor (list) {
    super()
    this.list = list
    console.log('ConcreteAggregate Class created')
  }

  createIterator () {
    console.log('ConcreteAggregate.CreateIterator invoked')
    this.iterator = new ConcreteIterator(this)
  }
}

var aggregate = new ConcreteAggregate([0, 1, 2, 3, 4, 5, 6, 7])
aggregate.createIterator()
console.log(aggregate.iterator.first())
console.log(aggregate.iterator.next())
console.log(aggregate.iterator.currentItem())

```
# Mediator.js
```
'use strict'

class Mediator {
  constructor () {
    console.log('Mediator Class created')
  }

  colleagueChanged (colleague) {
    console.log('Mediator.colleagueChanged invoked')
  }
}

class ConcreteMediator extends Mediator {
  constructor () {
    super()
    console.log('ConcreteMediator Class created')
    this.colleague1 = new ConcreteColleague1(this)
    this.colleague2 = new ConcreteColleague2(this)
  }

  colleagueChanged (colleague) {
    console.log('ConcreteMediator.colleagueChanged invoked')
    switch (colleague) {
      case this.colleague1:
        console.log('ConcreteColleague1 has Changed -> change ConcreteColleague2.feature: ')
        this.colleague2.setFeature('new feature 2')
        break
      case this.colleague2:
        console.log('ConcreteColleague2 has Changed, but do nothing')
        break
      default:
        console.log('Do nothing')
    }
  }
}

class Colleague {
  constructor () {
    console.log('Colleague Class created')
  }

  changed () {
    console.log('Colleague.changed invoked')
    this.mediator.colleagueChanged(this)
  }
}

class ConcreteColleague1 extends Colleague {
  constructor (mediator) {
    super()
    console.log('ConcreteColleague1 Class created')
    this.mediator = mediator
    this.feature = 'feature 1'
  }

  setFeature (feature) {
    console.log('ConcreteColleague1.setFeature invoked')
    console.log('ConcreteColleague1 Feature has changed from ' + this.feature + ' to ' + feature)
    this.feature = feature
    this.changed()
  }
}

class ConcreteColleague2 extends Colleague {
  constructor (mediator) {
    super()
    console.log('ConcreteColleague2 Class created')
    this.mediator = mediator
    this.feature = 'feature 2'
  }

  setFeature (feature) {
    console.log('ConcreteColleague2.setFeature invoked')
    console.log('ConcreteColleague2 Feature has changed from ' + this.feature + ' to ' + feature)
    this.feature = feature
    this.changed()
  }
}

var mediator = new ConcreteMediator()
mediator.colleague1.setFeature('new feature 1')

```
# Memento.js
```
'use strict'

class Originator {
  constructor () {
    console.log('Originator Class created')
    this.state = 'a'
    console.log('Originator created. State= ' + this.state)
  }

  setMemento (Memento) {
    console.log('Originator.setMemento invoked')
    this.state = Memento.getState()
    console.log('Originator.setMemento State= ' + this.state)
  }

  createMemento (state) {
    console.log('Originator.createMemento invoked')
    return new Memento(state)
  }
}

class Memento {
  constructor (state) {
    console.log('Memento Class created')
    this.state = state
    console.log('Memento created. State= ' + this.state)
  }

  getState () {
    console.log('Memento.getState invoked')
    return this.state
  }

  setState (state) {
    console.log('Memento.setState invoked')
    this.state = state
  }
}

class Caretaker {
  constructor () {
    console.log('Caretaker Class created')
    this.mementos = []
  }

  addMemento (memento) {
    console.log('Caretaker.addMemento invoked')
    this.mementos.push(memento)
  }

  setMemento () {
    console.log('Caretaker.setMemento invoked')
    return this.mementos[this.mementos.length - 1]
  }
}

let caretaker = new Caretaker()
let originator = new Originator()
caretaker.addMemento(originator.createMemento('b'))
originator.setMemento(caretaker.setMemento())
console.log(originator.state)

```
# Observer.js
```
'use strict'

class Subject {
  constructor () {
    console.log('Subject Class created')
  }

  attach (observer) {
    this.observers.push(observer)
    console.log('Subject.attach invoked')
  }

  dettach (observer) {
    console.log('Subject.dettach invoked')
    for (var i in this.observers) {
      if (this.observers[i] === observer) {
        this.observers.splice(i, 1)
      }
    }
  }

  notify () {
    console.log('Subject.notify invoked')
    for (var i in this.observers) {
      this.observers[i].update(this)
    }
  }
}

class ConcreteSubject extends Subject {
  constructor () {
    super()
    this.subjectState = null
    this.observers = []
    console.log('ConcreteSubject Class created')
  }

  getState () {
    console.log('ConcreteSubject.getState invoked')
    return this.subjectState
  }

  setState (state) {
    console.log('ConcreteSubject.setState invoked')
    this.subjectState = state
    this.notify()
  }
}

class Observer {
  constructor () {
    console.log('Observer Class created')
  }

  update () {
    console.log('Observer.update invoked')
  }
}

class ConcreteObserver extends Observer {
  constructor () {
    super()
    this.observerState = ''
    console.log('ConcreteObserver Class created')
  }

  update (Subject) {
    console.log('ConcreteObserver.update invoked')
    this.observerState = Subject.getState()
    console.log('Observer new state: ' + this.observerState)
  }
}

var observer1 = new ConcreteObserver()
var observer2 = new ConcreteObserver()
var subject = new ConcreteSubject()
subject.attach(observer1)
subject.attach(observer2)
subject.setState('state 1')

```
# Prototype.js
```
'use strict'

class Prototype {
  constructor (prototype) {
    console.log('Prototype Class created')
  }

  setFeature (key, val) {
    this[key] = val
  }

  clone () {
    console.log('Prototype.clone invoked')
  }
}

class ConcretePrototype1 extends Prototype {
  constructor () {
    super()
    console.log('ConcretePrototype1 created')
    this.feature = 'feature 1'
  }

  clone () {
    console.log('ConcretePrototype1.clone invoked')
    let clone = new ConcretePrototype1()
    let keys = Object.keys(this)

    keys.forEach(k => clone.setFeature(k, this[k]))

    console.log('ConcretePrototype1 cloned')
    return clone
  }
}

class ConcretePrototype2 extends Prototype {
  constructor () {
    super()
    console.log('ConcretePrototype2 created')
    this.feature = 'feature 2'
  }

  clone () {
    console.log('ConcretePrototype2.Clone function')
    let clone = new ConcretePrototype2()
    let keys = Object.keys(this)

    keys.forEach(k => clone.setFeature(k, this[k]))
    console.log('ConcretePrototype2 cloned')
    return clone
  }
}

var proto1 = new ConcretePrototype1()
proto1.setFeature('feature', 'feature 11')
var clone1 = proto1.clone()
console.log(clone1.feature)
console.log(typeof clone1)
console.log(clone1 === proto1)

var proto2 = new ConcretePrototype2()
proto2.setFeature('feature', 'feature 22')
var clone2 = proto2.clone()
console.log(clone2.feature)
console.log(typeof clone2)
console.log(clone2 === proto2)

```
# Proxy.js
```
'use strict'

class Subject {
  constructor () {
    console.log('Subject Class created')
  }

  request () {
    console.log('Subject.request invoked')
  }
}

class RealSubject extends Subject {
  constructor () {
    super()
    console.log('RealSubject Class created')
  }

  request () {
    console.log('RealSubject.request invoked')
  }
}

class Proxy extends Subject {
  constructor () {
    super()
    console.log('Proxy Class created')
  }

  request () {
    this.realSubject = new RealSubject()
    this.realSubject.request()
  }
}

var proxy = new Proxy()
proxy.request()

```
# Signleton.js
```
'use strict'

class Singleton {
  constructor (data) {
    if (Singleton.prototype.Instance === undefined) {
      this.data = data
      Singleton.prototype.Instance = this
    }
    return Singleton.prototype.Instance
  }
}

let ob1 = new Singleton('one')
let ob2 = new Singleton('two')
let ob3 = new Singleton('Three')
ob2.init = 'Object flg'

console.log(ob1 === ob2)
console.log(ob1 === ob3)

console.log(ob1)
console.log(ob2)
console.log(ob3)

```
# State.js
```
'use strict'

class Context {
  constructor (state) {
    console.log('Context Class created')
    switch (state) {
      case 'A':
        this.state = new ConcreteStateA()
        break
      case 'B':
        this.state = new ConcreteStateB()
        break
      default:
        this.state = new ConcreteStateA()
    }
  }

  request () {
    console.log('Context.request invoked')
    this.state.handle(this)
  }
}

class State {
  constructor () {
    console.log('State Class created')
  }

  handle () {
    console.log('State.handle invoked')
  }
}

class ConcreteStateA extends State {
  constructor () {
    super()
    console.log('ConcreteStateA Class created')
  }

  handle (context) {
    console.log('ConcreteStateA.handle invoked')
  }
}

class ConcreteStateB extends State {
  constructor () {
    super()
    console.log('ConcreteStateB Class created')
  }

  handle (context) {
    console.log('ConcreteStateB.handle invoked')
  }
}

let context = new Context('A')
context.request()

```
# Strategy.js
```
'use strict'

class Context {
  constructor (type) {
    console.log('Context Class created!')
    switch (type) {
      case 'A':
        this.strategy = new ConcreteStrategyA()
        break
      case 'B':
        this.strategy = new ConcreteStrategyB()
        break
      default:
        this.strategy = new ConcreteStrategyA()
    }
  }

  contextInterface () {
    console.log('Context.contextInterface invoked')
    this.strategy.algorithmInterface()
  }
}

class Strategy {
  constructor () {
    console.log('Strategy Class created!')
  }

  algorithmInterface () {
    console.log('Strategy.algorithmInterface invoked')
  }
}

class ConcreteStrategyA extends Strategy {
  constructor () {
    super()
    console.log('ConcreteStrategyA Class created!')
  }

  algorithmInterface () {
    console.log('ConcreteStrategyA.algorithmInterface invoked')
  }
}

class ConcreteStrategyB extends Strategy {
  constructor () {
    super()
    console.log('ConcreteStrategyB Class created!')
  }

  algorithmInterface () {
    console.log('ConcreteStrategyB.algorithmInterface invoked')
  }
}

let contextA = new Context('A')
contextA.contextInterface()
let contextB = new Context('B')
contextB.contextInterface()

```
# Template Method.js
```
'use strict'

class AbstractClass {
  constructor () {
    console.log('AbstractClass Class created!')
  }

  templateMethod () {
    console.log('AbstractClass.templateMethod invoked')
    this.primitiveOperation1()
    this.primitiveOperation2()
  }

  primitiveOperation1 () {
    console.log('AbstractClass.primitiveOperation1 invoked')
  }

  primitiveOperation2 () {
    console.log('AbstractClass.primitiveOperation2 invoked')
  }
}

class ConcreteClass extends AbstractClass {
  constructor () {
    super()
    console.log('ConcreteClass Class created!')
  }

  primitiveOperation1 () {
    console.log('ConcreteClass.primitiveOperation1 invoked')
  }

  primitiveOperation2 () {
    console.log('ConcreteClass.primitiveOperation2 invoked')
  }
}

let obj = new ConcreteClass()
obj.templateMethod()

```
# Visitor.js
```
// Project done by http://www.kuip.co.uk/
// License: Attribution-ShareAlike (http://creativecommons.org/licenses/by-sa/4.0/)
'use strict'

class Visitor {
  constructor () {
    console.log('Visitor Class created!')
  }

  VisitConcreteElementA (ConcreteElementA) {
    console.log('Visitor.visitConcreteElementA invoked')
  }

  VisitConcreteElementB (ConcreteElementB) {
    console.log('Visitor.visitConcreteElementB invoked')
  }
}

class ConcreteVisitor1 extends Visitor {
  constructor () {
    super()
    console.log('ConcreteVisitor1 created')
  }

  VisitConcreteElementA (ConcreteElementA) {
    console.log('ConcreteVisitor1 visited ConcreteElementA')
  }

  VisitConcreteElementB (ConcreteElementB) {
    console.log('ConcreteVisitor1 visited ConcreteElementB')
  }
}

class ConcreteVisitor2 extends Visitor {
  constructor () {
    super()
    console.log('ConcreteVisitor2 created')
  }

  VisitConcreteElementA (ConcreteElementA) {
    console.log('ConcreteVisitor2 visited ConcreteElementA')
  }

  VisitConcreteElementB (ConcreteElementB) {
    console.log('ConcreteVisitor2 visited ConcreteElementB')
  }
}

class ObjectStructure {
  constructor () {
    console.log('ObjectStructure created')
  }
}

class Element {
  constructor () {
    console.log('Element Class created!')
  }

  Accept (visitor) {
    console.log('Element.visitConcreteElementB invoked')
  }
}

class ConcreteElementA extends Element {
  constructor () {
    super()
    console.log('ConcreteElementA created')
  }

  Accept (visitor) {
    visitor.VisitConcreteElementA(this)
  }

  OperationA () {
    console.log('ConcreteElementA OperationA')
  }
}

class ConcreteElementB extends Element {
  constructor () {
    super()
    console.log('ConcreteElementB created')
  }

  Accept (visitor) {
    visitor.VisitConcreteElementB(this)
  }

  OperationB () {
    console.log('ConcreteElementB OperationB')
  }
}

function initVisitor () {
  let visitor1 = new ConcreteVisitor1()
  let visitor2 = new ConcreteVisitor2()
  let elementA = new ConcreteElementA()
  let elementB = new ConcreteElementB()
  elementA.Accept(visitor1)
  elementB.Accept(visitor2)
}

initVisitor()

```