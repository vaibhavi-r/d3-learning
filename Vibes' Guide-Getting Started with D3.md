# Vibes' Guide to Getting Started with D3
Let's get to installing and eventually coding with in D3! Consider this guide as **Step 0** , i.e.  What you need to know before you can code some creative and amazing visualizations in D3.

Learning a new technology comes with its own host of environments, tools, and neat tricks. It helps to setup smoothly, and worry about the actual learning, instead of grappling with installation errors.
 
### So... What is D3?
Read [this](http://alignedleft.com/tutorials/d3/fundamentals) from Scott Murray's simple and effective blog.

### Okay, Can I D3 now?

Here are the **essential steps** to install and run d3 on your laptop:

I am recording the steps I followed as a complete beginner with no prior installations for d3 or related software.

**Note:** These instructions are for a **Mac**.

1. **Start Setup with Scott's [tutorial] (http://alignedleft.com/tutorials/d3/setup)**.
	* Create a project folder on your laptop.
	* Download D3 into your project folder from [official repo](https://github.com/d3/d3/releases).
	* Create an index.html file.
	
	```
	<!DOCTYPE html>
	<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>D3 Test</title>
        <script type="text/javascript" src="d3/d3.v3.js"></script>
    </head>
    <body>
        <script type="text/javascript">
            // Your beautiful D3 code will go here
        </script>
    </body>
</html>
```


	* To test this file, especially with D3, we need a local server!
	* Suggested local server: http-server

2. **Set up a local server**

* If you already have http-server, skip ahead to Step 3! 
* If not, http-server can be installed by NPM, which is automatically installed by Node JS when you install Node JS from HomeBrew! 
	* If this seems unnecessarily complicated (it is!), don't give up. 

	* 	Install Homebrew here 
	* 	Install 

	
3. Run the local server
   * Type `http-server &` in terminal from the project folder to run the local server.
   * Your HTML file should be available at[http://localhost:8080/](http://localhost:8080/)




**Installation Resources**

* Dynamic Graphics: D3
* Text Editor: SublimeText
* Installation Helper: [Install Homebrew]()
* JavaScript Package Manager: [Node & NPM with Homebrew]()
* Local Server: [http-server with NPM]()

**Verify your installation** with these steps

1. Verify HTML+D3 file on browser
2. Verify npm, and node install
3. Verify 

