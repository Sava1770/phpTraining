<?php

abstract class ParentClass {
    
    abstract function get();
}

abstract class ChildClass extends ParentClass{
    abstract function set();
}

class TestClass extends ChildClass{
    function set(){}
    function get(){}
}

