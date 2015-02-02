define(function () {

return String.RESERVED_WORDS = (
	'break,delete,function,return,typeof,case,do,if,switch,var,catch,else,in,this,void,continue,' + 
	'false,instanceof,throw,while,debugger,finally,new,true,with,default,for,null,try,' +
	'abstract,double,goto,native,static,boolean,enum,implements,package,super,byte,export,import,private,synchronized,' +
	'char,extends,int,protected,throws,class,final,interface,public,transient,const,float,long,short,volatile'
).split(',');

});

/**
* Javascript 中的保留字。
* @var {string[]} external:String.RESERVED_WORDS
*/
