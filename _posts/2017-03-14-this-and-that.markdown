---
layout: post
title:  "This and That in JavaScript"
date:   2017-03-14 00:00:00 -0700
categories: web-development
image: /assets/images/javascript-blog.png
excerpt: "When I started doing full-stack JavaScript development, I started seeing some confusing variable declarations."
author: Eric Debelak
author-title: Senior Developer
---
When I started doing full-stack JavaScript development, I started seeing some confusing variable declarations like: 

{% highlight javascript %}
var that = this;
{% endhighlight %}

or

{% highlight javascript %}
var self = this;
{% endhighlight %}

or

{% highlight javascript %}
var alias = this;
{% endhighlight %}

The <a href="https://en.wikipedia.org/wiki/Scope_(computer_science)" target="_blank">scope</a> of `this` in JavaScript can be confusing and frustrating if you don't realize that `this` frequently gets overwritten. Let me give you a few examples of when `this` changes based on scope and how to avoid any issues.

### Callback Functions

<a href="https://en.wikipedia.org/wiki/Callback_(computer_programming)" target="_blank">Callback functions</a>, or higher-order functions, are functions that are executed in other functions. In JavaScript, functions are first-class objects, and can be used as objects - which means they can be passed as parameters, stored as variables and even be returned to be executed in other functions.

In <a href="https://en.wikipedia.org/wiki/Object-oriented_programming" target="_blank">Object-Oriented</a> JavaScript, `this` will typically refer to the whole object, with all its member variables and methods. But as soon as one of your methods uses a callback function, for example, anything from a simple `setTimeout()` to a `forEach()`, the callback function overwrites `this`.

So let's say we use `setTimeout()` and need access to one of the object's methods inside the callback function (which is the first parameter in setTimeout). The solution is what we have before: `var that = this;`.

The whole code block might look like this:

{% highlight javascript %}
doSomething() {
	//	we'd do something here
},

onClick() {
	var that = this;
	setTimeout(function() {
		that.doSomething();
	}, 500)
}
{% endhighlight %}

### Callback Functions in Iterative Functions

Another very common use case is <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration" target="_blank">iterative functions</a>, like `forEach()`. Each iteration calls a callback function, so again, `this` gets overwritten inside the callback function's scope.

{% highlight javascript %}

componentDidMount() {
	var that = this;
	this.state.someArray.forEach(function(arrayValue, index) {
		if(my_condition_is_met) {
			that.doSomething(arrayValue);
		}
	})
}
{% endhighlight %}

Callback functions are very common in some libraries, like jQuery. jQuery ajax calls also overwrite `this`. If you are in doubt, you can always `console.log(this);` just to see what `this` is.

