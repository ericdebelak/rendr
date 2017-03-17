---
layout: post
title:  "Comparing String Lists in Python"
date:   2017-03-16 00:00:00 -0700
categories: web-development
image: /assets/images/python-blog.png
excerpt: "A few weeks ago, I ran into an interesting problem on a Python Flask project. Thankfully, Python is pretty slick."
author: Jay Renteria
author-title: Senior Developer
---
A few weeks ago, I ran into an interesting problem on a <a href="http://flask.pocoo.org/" target="_blank">Python Flask</a> project. An array of strings (in this case, email accounts) needed to be sorted - and if any of the strings contained specific words (like "test", for example), the associated user accounts needed to be modified slightly to indicate test user status.

There are a number of different approaches you can take to accomplish this, but Python includes a really great function to help smooth this process out - and it's dead simple. 

Let's start by making a test list: 

{% highlight python %}
test_list = ['example',  "example2", "rendrconsulting", "rendr", "jane@example3.com", "hermesdevelopment", "11online", "example4.com", "john@example5.com"]
{% endhighlight %}

Notice we have a good mix - email addresses, URLs, and just plain strings. We want to find any and all occurances of the specific strings in our email address data set and mark the user associated as a tester.

{% highlight python %}
test_mark = ''
if any(word in test['email'] for word in test_list):
	test_user = 'true'
{% endhighlight %}

It's as simple as that. What `any()` does is it checks if any of the words in our test data 'email' match any words defined in our `test_list`. If so, we set `test_user` to true. 

For more reading on the `any()` (and its cousin, `all()`) function in Python, check out <a href="https://leemendelowitz.github.io/blog/any-all-in-python.html" target="_blank">this excellent write-up</a> that goes into more detail. 


