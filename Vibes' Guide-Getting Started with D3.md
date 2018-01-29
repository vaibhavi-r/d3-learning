# Vibes' Guide to Getting Started with D3
Let's get to installing and eventually coding with in D3! Consider this guide as **Step 0** , i.e.  What you need to know before you can code some creative and amazing visualizations in D3.

Learning a new technology comes with its own host of environments, tools, and neat tricks. It helps to setup smoothly, and worry about the actual learning, instead of grappling with installation errors.
 
### So... What is D3?
Read [this][align1] from Scott Murray's simple and effective blog.

### Okay, Can I D3 now?

Here are the **essential steps** to install and run d3 on your laptop:

I am recording the steps I followed as a complete beginner with no prior installations for d3 or related software. 

**Note:** These instructions are for a **Mac**.

1. **Start Setup with Scott's [tutorial][align2]**.
	* Create a project folder on your laptop.
	* Download D3 into your project folder from [official repo][3].
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


	* To test this file, with dynamic D3 or JS components, we need a local server!
	* Suggested local server: **http-server** (Why? It's mentioned on the [official wiki][4])

2. **Set up a local server**

	* If you already have http-server, skip ahead to Step 3! 
	* If not, http-server can be installed by NPM, which is automatically installed by Node JS when you install Node JS from HomeBrew! 
	* If this seems unnecessarily complicated (it is!), don't give up. 

		* Install [Homebrew][5]. Type the folllowing in Terminal. `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
		* Install [Node JS & NPM with HomeBrew][6]. Type `brew install node` in Terminal.
		* Install [http-server][7] with NPM. Type `npm install -g http-server` in Terminal

	* Alternates to http-server include MAMP.
	
3. **Run the local server**
   * Type `http-server &` in terminal from the project folder to run the local server.
   * Your dynamic HTML file should run at [http://localhost:8080/](http://localhost:8080/)

4. **Verify your installation** with these steps

	* [Verify HTML+D3 setup][8]  on browser
	* [Verify npm, and node install][6]. Type `node -v` and `npm -v` in Terminal. You should see some installed version number.

5. **Start playing!**	
	* Start from SVG to Bar Chart: [D3 for Mere Mortals][9]
	* Mike Bostock's famous [Three Little Circles][10] tutorial.
	* Create a Bar Chart [Part I][11] & [Part II][12]
	* http://christopheviau.com/d3_tutorial/




**Summary of Install Resources**

* Dynamic Graphics: [D3][3]
* Text Editor: [SublimeText][4]
* Installation Helper: [Install Homebrew][5]
* JavaScript Package Manager: [Node & NPM with Homebrew][6]
* Local Server: [http-server with NPM][7]

<!--Setup Tutorials-->
[align1]: http://alignedleft.com/tutorials/d3/fundamentals
[align2]: http://alignedleft.com/tutorials/d3/setup
<!--Official D3 Resources-->
[3]: https://github.com/d3/d3/releases
[4]: https://github.com/d3/d3/wiki
<!--Installation Help-->
[5]: https://brew.sh/
[6]: http://blog.teamtreehouse.com/install-node-js-npm-mac
[7]: https://www.npmjs.com/package/http-server 
[8]: https://www.dashingd3js.com/d3js-first-steps
<!--Basic D3 Tutorials-->
[9]: http://www.recursion.org/d3-for-mere-mortals/
[10]: https://bost.ocks.org/mike/circles/
[11]: https://bost.ocks.org/mike/bar/
[12]: https://bost.ocks.org/mike/bar/2/




