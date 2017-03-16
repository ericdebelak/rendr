---
layout: post
title:  "Comparing String Lists in Python"
date:   2017-03-16 00:00:00 -0700
categories: web-development
image: /assets/images/our-work.jpg
author: Jay Renteria
author-title: Senior Developer
---
A few weeks ago I ran into a problem that required an array of strings (email accounts) to be sorted, and if any of the strings contained words that were in a list, they needed to be altered slightly to show that they were for testng purposes.

There are a few approaches you can take to accomplish this, but Python includes a really great function to help smooth this process out, and it works really well! 

Let's start by making a test list: 

{% highlight python %}
test_list = ['example',  "example2", "rendrconsulting", "rendr", "jane@example3.com", "hermesdevelopment", "11online", "example4.com", "john@example5.com"]
{% endhighlight %}

Notice that we have a good mix of things, email addresses, urls, and just plain strings. We want to find any and all occurances of these specific things in our data set and mark them as true.

{% highlight python %}
test_mark = ''
if any(word in test['email'] for word in test_list):
	test_user = 'true'
{% endhighlight %}

It's as simple as that. What this does is checks if any of the words in our test data 'email' match any words defined in our `test_list`. If so, we set `test_user` to true. 

For more reading on the `any()` (and `all()`) functions in Python, check out <a href="https://leemendelowitz.github.io/blog/any-all-in-python.html" target="_blank">this post</a> that goes into a bit more detail. 


