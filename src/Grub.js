class Grub {
  //Research the constructor keyword, it seems to be implying
  //that whatever is placed within, will be become the properties
  //of the object the class keyword instantiates.
  constructor() {
    this.age = 0;
    this.color = 'pink';
    this.food = 'jelly';
  }
  
  //Research to see if this is the proper syntax of declaring
  //methods that are placed upon the __proto__.
  eat() {
    return 'Mmmmmmmmm jelly';
  }
};
