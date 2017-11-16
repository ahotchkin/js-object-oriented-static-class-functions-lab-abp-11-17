'use strict';
class Question{
  constructor(content){
    this.content = content
  }
  static All(){
    return [1, 2]
  }
}

Question._All()
