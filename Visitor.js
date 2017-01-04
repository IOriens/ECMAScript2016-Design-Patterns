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
