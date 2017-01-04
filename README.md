# ECMAScript-Design-Patterns
使用es6实现的设计模式

# Environment
Nodejs v6.3.0+

# Build output.md
```
node build.js
```
# 设计模式分为三种类型，共23种。
- 创建型模式：单例模式、抽象工厂模式、建造者模式、工厂模式、原型模式。
- 结构型模式：适配器模式、桥接模式、装饰模式、组合模式、外观模式、享元模式、代理模式。
- 行为型模式：模版方法模式、命令模式、迭代器模式、观察者模式、中介者模式、备忘录模式、解释器模式（Interpreter模式）、状态模式、策略模式、职责链模式(责任链模式)、访问者模式。

##创建型模式：
- [Signleton](https://github.com/ryouaki/ECMAScript-Design-Patterns/blob/master/Signleton.js)（单例模式）：保证一个类仅有一个实例，并提供一个访问它的全局访问点。
>Ensure a class only has one instance, and provide a global point of access to it.

- [AbstractFactory](https://github.com/ryouaki/ECMAScript-Design-Patterns/blob/master/AbstractFactory.js)（抽象工厂模式）：提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类。  
>Provide an interface for creating families of related or dependent objects without specifying their concrete classes.

- [Builder](https://github.com/ryouaki/ECMAScript2016-Design-Patterns/blob/master/Builder.js)（建造者模式）：将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示。  
>Separate the construction of a complex object from its representation so that the same construction process can create different representations.

- [Factory](https://github.com/ryouaki/ECMAScript2016-Design-Patterns/blob/master/Factory.js)（工厂模式）：定义一个用于创建对象的接口，让子类决定将哪一个类实例化。Factory Method使一个类的实例化延迟到其子类。  
>Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

- [Prototype](https://github.com/ryouaki/ECMAScript2016-Design-Patterns/blob/master/Prototype.js)（原型模式）：用原型实例指定创建对象的种类，并且通过拷贝这个原型来创建新的对象。
>Specify the kinds of objects to create using a prototypical instance, and create new objects by copying this prototype.

##结构型模式：

- [Adapter](https://github.com/ryouaki/ECMAScript2016-Design-Patterns/blob/master/Adapter.js)（适配器模式）：将一个类的接口转换成客户希望的另外一个接口。Adapter模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。
>Convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.

- [Bridge](https://github.com/ryouaki/ECMAScript2016-Design-Patterns/blob/master/Bridge.js)（桥接模式）：将抽象部分与它的实现部分分离，使它们都可以独立地变化。
>Decouple an abstraction from its implementation so that the two can vary independently.

- [Composite](https://github.com/ryouaki/ECMAScript2016-Design-Patterns/blob/master/Composite.js)（组合模式）：将对象组合成树形结构以表示“部分-整体”的层次结构。它使得客户对单个对象和复合对象的使用具有一致性。
>Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.

- [Decorator](https://github.com/ryouaki/ECMAScript2016-Design-Patterns/blob/master/Decorator.js)（装饰模式）：动态地给一个对象添加一些额外的职责。就扩展功能而言， 它比生成子类方式更为灵活。
>Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

- [Facade](https://github.com/ryouaki/ECMAScript2016-Design-Patterns/blob/master/Facade.js)（外观模式）：为子系统中的一组接口提供一个一致的界面，Facade模式定义了一个高层接口，这个接口使得这一子系统更加容易使用。
>Provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use.
- [Flyweight](https://github.com/ryouaki/ECMAScript2016-Design-Patterns/blob/master/Flyweight.js)（享元模式）：运用共享技术有效地支持大量细粒度的对象。
>Use sharing to support large numbers of fine-grained objects efficiently.

- [Proxy](https://github.com/ryouaki/ECMAScript2016-Design-Patterns/blob/master/Proxy.js)（代理模式）：为其他对象提供一个代理以控制对这个对象的访问。
>Provide a surrogate or placeholder for another object to control access to it.

##行为型模式：
- [Chain of Responsibility](https://github.com/ryouaki/ECMAScript2016-Design-Patterns/blob/master/Chain%20of%20Responsibility.js)（责任链模式）：为解除请求的发送者和接收者之间耦合，而使多个对象都有机会处理这个请求。将这些对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它。
>Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chain the receiving objects and pass the request along the chain until an object handles it.
- [Command](https://github.com/ryouaki/ECMAScript2016-Design-Patterns/blob/master/Command.js)（命令模式）：将一个请求封装为一个对象，从而使你可用不同的请求对客户进行参数化；对请求排队或记录请求日志，以及支持可取消的操作。
>Encapsulate a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.
- [Interpreter](https://github.com/ryouaki/ECMAScript2016-Design-Patterns/blob/master/Interpreter.js)（解析器模式）：给定一个语言, 定义它的文法的一种表示，并定义一个解释器, 该解释器使用该表示来解释语言中的句子。
>Given a language, define a represention for its grammar along with an interpreter that uses the representation to interpret sentences in the language.

- [Iterator](https://github.com/ryouaki/ECMAScript2016-Design-Patterns/blob/master/Iterator.js)（迭代器模式）：提供一种方法顺序访问一个聚合对象中各个元素，而又不需暴露该对象的内部表示。
>Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

- [Mediator](https://github.com/ryouaki/ECMAScript2016-Design-Patterns/blob/master/Mediator.js)（中介模式）：用一个中介对象来封装一系列的对象交互。中介者使各对象不需要显式地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。
>Define an object that encapsulates how a set of objects interact. Mediator promotes loose coupling by keeping objects from referring to each other explicitly, and it lets you vary their interaction independently.

- [Memento](https://github.com/ryouaki/ECMAScript2016-Design-Patterns/blob/master/Memento.js)（备忘录模式）：在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。这样以后就可将该对象恢复到保存的状态。
>Without violating encapsulation, capture and externalize an object's internal state so that the object can be restored to this state later.

- [Observer](https://github.com/ryouaki/ECMAScript2016-Design-Patterns/blob/master/Observer.js)（观察者模式）：定义对象间的一种一对多的依赖关系,以便当一个对象的状态发生改变时,所有依赖于它的对象都得到通知并自动刷新。
>Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

- [State](https://github.com/ryouaki/ECMAScript2016-Design-Patterns/blob/master/State.js)（状态模式）：允许一个对象在其内部状态改变时改变它的行为。对象看起来似乎修改了它所属的类。
>Allow an object to alter its behavior when its internal state changes. The object will appear to change its class.

- [Strategy](https://github.com/ryouaki/ECMAScript2016-Design-Patterns/blob/master/Strategy.js)（策略模式）：定义一系列的算法,把它们一个个封装起来, 并且使它们可相互替换。本模式使得算法的变化可独立于使用它的客户。
>Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

- [Template Method](https://github.com/ryouaki/ECMAScript2016-Design-Patterns/blob/master/Template%20Method.js)（模板方法模式）：定义一个操作中的算法的骨架，而将一些步骤延迟到子类中。Template Method使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤。
>Define the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.

- [Visitor](https://github.com/ryouaki/ECMAScript2016-Design-Patterns/blob/master/Visitor.js)（访问者模式）：表示一个作用于某对象结构中的各元素的操作。它使你可以在不改变各元素的类的前提下定义作用于这些元素的新操作。
>Represent an operation to be performed on the elements of an object structure. Visitor lets you define a new operation without changing the classes of the elements on which it operates.


# 参考
[es6-design-patterns](https://github.com/loredanacirstea/es6-design-patterns)

# LICENCE
MIT
