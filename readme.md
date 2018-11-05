## Description
A simple command line application that acts as an interface between a client and server component to process user input. Support for adding new tasks, deleting tasks (by mixed usage of the task text itself or its task number), listing stored tasks, and help. This project is not so much meant as a useful package to accomplish some utility, but rather as a means of learning new methods and architecture patterns within Node.

## Installation
Add the NPM package to your project by running:
> ```npm install --save cli-task-manager```

Or install globally with
> ```npm install -g cli-task-manager```

## Usage
At present, there are 4 supported commands:


>           'help' -- Returns the server's supported commands. Accepts no arguments.     
 
>           'ls' -- Print the currently stored task list. Accepts no arguments.

>           'add' -- Add new item(s) to the stored task list. Accepts arguments of the task strings to be added.

>           'delete' -- Delete item(s) from the stored task list. Accepts arguments of the task strings to be deleted,
>            or the task number as shown by the 'ls' command.

## Examples
> Coming Soon...

## Author
>**DrowsyDev**