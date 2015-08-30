EXTENDED_ERROR_EXPLANATION = {
	'ParseError': "<b>Extended Error Explanation: </b>A parse error means that Python does not understand the syntax on the line the error message points out.  Common examples are forgetting commas beteween arguments or forgetting a : (colon) on a for statement.      <br><b>Suggestion: </b>To fix a parse error you just need to look carefully at the line with the error and possibly the line before it.  Make sure it conforms to all of Python's rules.",
	'TypeError': "<b>Extended Error Explanation: </b> Type errors most often occur when an expression tries to combine two objects with types that should not be combined.  Like using \"+\" to add a number to a list instead of \".append\", or dividing a string by a number.  <br><b>Suggestion: </b>To fix a type error you will most likely need to trace through your code and make sure the variables have the types you expect them to have. This is a great time to use the Data Explorer!",
	'SyntaxError': "<b>Extended Error Explanation: </b> This message indicates that Python can't figure out the syntax of a particular statement.  Some examples are assigning to a literal, or a function call.      <br><b>Suggestion: </b>Check your assignment statements and make sure that the left hand side of the assignment is a variable, not a literal (e.g., 7 or \"hello\") or a function.",
	'NameError': "<b>Extended Error Explanation: </b> A name error almost always means that you have used a variable before it has a value.  Often this may be a simple typo, so check the spelling carefully.  <br><b>Suggestion: </b>Check the right hand side of assignment statements and your function calls, this is the most likely place for a NameError to be found. It really helps to step through your code, one line at a time, mentally keeping track of your variables. You should also use the Data Explorer!",
	'ValueError': "<b>Extended Error Explanation: </b> A ValueError most often occurs when you pass a parameter to a built-in function, and the function is expecting one type and you pass something  different. For instance, if you try to convert a non-numeric string to an int, you will get a ValueError:<br><pre>  int(\"Corgi\") # ValueError: invalid literal for int() with base 10</pre> <br><b>Suggestion: </b>The error message gives you a pretty good hint about the name of the function as well as the value that is incorrect.  Look at the error message closely and then trace back to the variable containing the problematic value. }",
	'AttributeError': "<b>Extended Error Explanation: </b> This happens when you try to do something like  X.Y and something was off. This error message is telling you that the object on the left hand side of the dot, does not have the attribute or method on the right hand side.      <br><b>Suggestion: </b>The most common cause of this message is that the object undefined does not have attribute X. This might be because you had a typo in the thing on the right side. This tells you that the object on the left hand side of the dot is not what you think. Trace the variable back and print it out in various places until you discover where it becomes undefined.  Otherwise check the attribute on the right hand side of the dot for a typo. For example, make sure you didn't spell 'append' or get the wrong order.",
	'TokenError': "<b>Extended Error Explanation: </b> Most of the time this error indicates that you have forgotten a right parenthesis or have forgotten to close a pair of quotes.  <br><b>Suggestion: </b>Check each line of your program and make sure that your parenthesis are balanced.",
	'IndexError': "<b>Extended Error Explanation: </b> This message means that you are trying to index past the end of a string or a list.  For example, if your list has 3 things in it and you try to access the item at position 5.  <br><b>Suggestion: </b>Remember that the first item in a list or string is at index position 0, quite often this message comes about because you are off by one.  Remember in a list of length 3 the last legal index is 2.<br><pre>favorite_colors = [\"red\", \"blue\", \"green\"]\nfavorite_colors[2] # prints green favorite_color[3] # raises an IndexError</pre>",
	'ImportError': "<b>Extended Error Explanation: </b> This error message indicates that you are trying to import a module that does not exist, or is not in the same directory as your python script.  <br><b>Suggestion: </b>One problem may simply be that you have a typo - remember, you must not capitalize the module name. Another common problem is that you have placed the module in a different directory. Finally, if you're using a special module, then it might not be installed. Come ask an instructor on how to install new modules if it's one that you must use!",
	'ReferenceError': "<b>Extended Error Explanation: </b> This is a really hard error to get, so I'm not entirely sure what you did.  <br><b>Suggestion: </b>Bring this code to the instructor. ",
	'ZeroDivisionError': "<b>Extended Error Explanation: </b> This tells you that you are trying to divide by 0. Typically this is because the value of the variable in the denominator of a division expression has the value 0.  <br><b>Suggestion: </b>You may need to protect against dividing by 0 with an if statment, or you may need to rexamine your assumptions about the legal values of variables, it could be an earlier statment that is unexpectedly assigning a value of zero to the variable in question.",
	'IndentationError': "<b>Extended Error Explanation: </b> This error occurs when you have not indented your code properly.  This is most likely to happen as part of an if, for, while or def statement.  <br><b>Suggestion: </b>Check your if, def, for, and while statements to be sure the lines are properly indented beneath them (seriously, this happens ALL the time).  Another source of this error comes from copying and pasting code where you have accidentally left some bits of code lying around that don't belong there anymore. Finally, a very sinister but unlikely possibility is that you have some tab characters in your code, which look identical to four spaces. Never, ever use tabs, and carefully check code from the internet to make sure it doesn't have tabs.",
	'EOFError': "<b>Extended Error Explanation: </b> If you are using input() or raw_input() commands, then this error happens when they don't get the right ending.  <br><b>Suggestion: </b>It's hard to protect against users. However, if you're using input(), you might be able to use raw_input() instead to avoid this problem. ",
	'IOError': "<b>Extended Error Explanation: </b> This is a very easy error to get. The most common reason is that you were trying to open a file and it wasn't in the right place.   <br><b>Suggestion: </b>Make sure that the file is in the right place - print out the file path, and then check that it's definitely on your computer at that location. If you need help doing file processing, you should probably check with an instructor.",
	'KeyError': "<b>Extended Error Explanation: </b> A dictionary has a bunch of keys, but until a key is defined, you cannot reference it. In fact, this is very similar to how a variable works. This error is caused by you trying to refer to a key that does not exist.  <br><b>Suggestion: </b>The most common reason you get this exception is that you have a typo in your dictionary access. It is also possible that the key does not exist yet but should. Use the data explorer to find out the current keys in a dictionary.",
	'MemoryError': "<b>Extended Error Explanation: </b> Somehow, you have run out of memory. This is crazy hard to get, so consider yourself impressive!  <br><b>Suggestion: </b>Bring your code to an instructor. ",
	'OSError': "<b>Extended Error Explanation: </b> It's hard to say what an OSError is without deep checking. Many things can cause it.  <br><b>Suggestion: </b>Bring your code to an instructor.      "
}