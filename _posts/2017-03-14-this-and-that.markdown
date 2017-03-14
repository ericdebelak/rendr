---
layout: post
title:  "This and That in JavaScript"
date:   2017-03-14 00:00:00 -0700
categories: web-development
image: /assets/images/our-work.jpg
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

<code>this</code>' scope in JavaScript can be confusing and frustrating if you don't realize that <code>this</code> frequently gets overwritten. Let me give you a few examples of when <code>this</code> changes based on scope and how to avoid any issues.

The most common instance I run into while writing JavaScript, especially React and Node, is callback functions.

### Callback Functions

Callback functions, or higher-order functions, are basically functions that are executed in other functions. In JavaScript functions are first-class objects, and can be used as objects, which means they can be passed as parameters, stored as variables and even return them to be executed in other functions.

When we are creating React components, they are actually JavaScript classes. Inside the class <code>this</code> will typically refer to the whole object, with all it's member variables and methods. But as soon as one of your methods uses a callback function, anything from a simple <code>setTimeout()</code> to <code>forEach()</code>, the callback function overwrites <code>this</code>.

So let's say we are using <code>setTimeout()</code> and need access to one of the object's methods inside the callback function (which is the first parameter in setTimeout)? Well, the solution is what we have before. <code>var that = this;</code>

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

Another very common use case is iterative functions, like <code>forEach()</code>. Each iteration calls a callback function, so again, <code>this</code> gets overwritten inside the callback function's scope.

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

Callback functions are very common in some libraries, like jQuery. jQuery ajax calls also overwrite <code>this</code>. If you are in doubt, you can always <code>console.log(this);</code> just to see what <code>this</code> is. Thankfully, this issue is very easy to solve.

