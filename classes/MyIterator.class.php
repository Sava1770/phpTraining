<?php

class MyIteratator implements Iterator{
    private $_start, $_end, $_current;
    
    function __construct($s,$e) {
       $this->_start = $s;
       $this->_end = $e;
    }
    
    function rewind() {
        $this->_current = $this->_start;
    }
    
    function key(){
        return $this->_current;
    }
    
    function current() {
        return ($this->_current) * 2;
    }
    
    function next() {
        return $this->_current++;
    }
    
    function valid() {
        return $this->_current <= $this->_end;
    }
}