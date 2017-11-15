"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),Enemy=function(){function e(n){_classCallCheck(this,e),this.ele=null,this.hp=1,this.speed=10,this.dieImgs=[],this.score=10,this.type=n}return _createClass(e,[{key:"init",value:function(){switch(this.ele=document.createElement("div"),gameEngine.ele.appendChild(this.ele),gameEngine.allEnemys.push(this),this.type){case this.Enemy_Type_Large:this.ele.className="enemy-large",this.hp=this.Enemy_Hp_Large,this.speed=this.Enemy_Speed_Large,this.dieImgs=["images2/plane3_die1.png","images2/plane3_die2.png","images2/plane3_die3.png","images2/plane3_die4.png","images2/plane3_die5.png","images2/plane3_die6.png"],this.score=30;break;case this.Enemy_Type_Middle:this.ele.className="enemy-middle",this.hp=this.Enemy_Hp_Middle,this.speed=this.Enemy_Speed_Middle,this.dieImgs=["images2/plane2_die1.png","images2/plane2_die2.png","images2/plane2_die3.png","images2/plane2_die4.png"],this.score=20;break;case this.Enemy_Type_Small:this.ele.className="enemy-small",this.hp=this.Enemy_Hp_Small,this.speed=this.Enemy_Speed_Small,this.dieImgs=["images2/plane1_die1.png","images2/plane1_die2.png","images2/plane1_die3.png"],this.score=10;break;default:alert("没有这种敌机")}return this.ele.style.left=parseInt(Math.random()*(gameEngine.ele.offsetWidth-this.ele.offsetWidth))+"px",this.ele.style.top=-this.ele.offsetHeight+"px",this}},{key:"move",value:function(){var e=this;this.timer=setInterval(function(){e.ele.offsetTop>gameEngine.ele.offsetHeight?(clearInterval(e.timer),gameEngine.ele.removeChild(e.ele),gameEngine.allEnemys.splice(gameEngine.allEnemys.indexOf(e),1)):e.ele.style.top=e.ele.offsetTop+e.speed+"px"},30)}},{key:"hurt",value:function(){this.hp--,0==this.hp&&(this.boom(),gameEngine.totalScore+=this.score)}},{key:"boom",value:function(){var e=this;clearInterval(this.timer);var n=0,t=setInterval(function(){n>=e.dieImgs.length?(clearInterval(t),gameEngine.ele.removeChild(e.ele),gameEngine.allEnemys.splice(gameEngine.allEnemys.indexOf(e),1)):e.ele.style.backgroundImage="url("+e.dieImgs[n++]+")"},100)}}]),e}();Enemy.prototype.Enemy_Type_Large=1,Enemy.prototype.Enemy_Type_Middle=2,Enemy.prototype.Enemy_Type_Small=3,Enemy.prototype.Enemy_Speed_Large=2,Enemy.prototype.Enemy_Speed_Middle=4,Enemy.prototype.Enemy_Speed_Small=6,Enemy.prototype.Enemy_Hp_Large=6,Enemy.prototype.Enemy_Hp_Middle=3,Enemy.prototype.Enemy_Hp_Small=1;