When you type ls, the command line looks at the directory you are in, and then “lists” all the files and directories inside of it. Be sure to type the letter l as in “List” and not the number 1.
m
In the terminal, the first thing you see is $. This is called a shell prompt. It appears when the terminal is ready to accept a command.

pwd
The next command we’re going to look at is pwd, which stands for “print working directory.” It outputs the name of the directory you are currently in, called the working directory.

cd 
Our next command is cd, which stands for “change directory.” Just as you would click on a folder in Windows Explorer or Finder, cd switches you into the directory you specify. In other words, cd changes the working directory.

To navigate directly to a directory, use cd with the directory’s path as an argument. Here, cd jan/memory navigates directly to the memory directory.

To move up one directory, we use cd ..:
o move upwards in the filesystem we use cd .., and to move downwards we use cd next-directory. We combine directions using a / like so:
cd ../next-directory

mkdir-make directory
The mkdir command stands for “make directory”. It takes in a directory name as an argument and then creates a new directory in the current working directory.
$ mkdir new-directory
$ ls 
old-directory    new-directory

touch
The touch command creates a new file inside the working directory. It takes in a filename as an argument and then creates an empty file with that name in the current working directory.

From the command line, you can navigate through files and folders on your computer:

pwd -outputs the name of the current working directory.

ls - lists all files and directories in the working directory.

cd - switches you into the directory you specify.

mkdir - creates a new directory in the working directory.

touch creates a new file inside the working directory.

You can use helper commands to make navigation easier:

clear clears the terminal

tab autocompletes the name of a file or directory

↑ and ↓ allow you to cycle through previous commands

n addition to -a, the ls command has several more options. Here are three common ones:

-a - lists all contents, including hidden files and directories
-l - lists all contents of a directory in long format, as well as the file permissions
-t - orders files and directories by the time they were last modified.l

ls -alt lists all contents, including hidden files and directories, in long format, ordered by the date and time they were last modified.
cat

The cat command outputs the contents of a specified file. For example:

cat action/superwoman.txt
will output all the text from superwoman.txt.

This is a useful command for peeking at files without opening them, and confirming the result of other commands that change the contents of files.
We would then use cat with the argument 
cat action/scifi/terminator.txt.

cp Part 1
The cp command copies files or directories. Below, we copy the contents of a source file into a destination file:

The most basic scenario of using cp is to copy a file in the current working directory . For example, to copy a file named file.txt to file_backup.txt, you wound run the following command:

cp file file_backup
Copy
