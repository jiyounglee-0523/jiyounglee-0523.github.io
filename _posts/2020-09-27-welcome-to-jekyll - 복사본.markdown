---
layout: post
title:  "Independency Measure"
date:   2021-08-27 22:07:49 +0900
categories: AI
---


Reference1 : Alexander J. Somola: Hilbert Schmidt Independence Criterion [http://alex.smola.org/teaching/iconip2006/iconip_4.pdf]



This post will cover major criterions that measure independency. Before we proceed, let's define a what 'independency' is.



Given ${(x_1, y_1), \ldots, (x_m, y_m)} \sim Pr(x, y)$ determine whether $Pr(x, y) = Pr(x)Pr(y)$



### Hilbert-Schmidt Independence Criterion (HSIC)





You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

Jekyll requires blog post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/