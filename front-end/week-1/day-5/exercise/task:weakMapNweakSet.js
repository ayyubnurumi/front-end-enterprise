/* source= https://javascript.info/task/recipients-read
Store "unread" flags

There’s an array of messages:

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

Your code can access it, but the messages are managed by someone else’s code. New messages are added, old ones are removed regularly by that code, and you don’t know the exact moments when it happens.

Now, which data structure could you use to store information about whether the message “has been read”? The structure must be well-suited to give the answer “was it read?” for the given message object.

P.S. When a message is removed from messages, it should disappear from your structure as well.

P.P.S. We shouldn’t modify message objects, add our properties to them. As they are managed by someone else’s code, that may lead to bad consequences.

Let’s store read messages in WeakSet:
*/
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

// 2 messages have been read
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages has 2 elements

// ...let's read the first messages again!
readMessages.add(messages[0]);
// readMessages still has 2 elements

// answer: was the message[0] read?
console.log("Read message 0: " + readMessages.has(messages[0])); // true

messages.shift();
// now readMessages has 1 elemet (technically memory may be cleaned later)
/*
The WeakSet allows to store a set of messages and easily check for the existence of a message in it.

It cleans up itself automatically. The tradeoff is that we can’t iterate over it, can’t get “all read messages” from it directly. But we can do it by iterating over all messages and filtering those that are in the set.

Another, different solution could be to add a property like message.isRead=true to a message after it’s read. As messages objects are managed by another code, that’s generally discouraged, but we can use a symbolic property to avoid conflicts.
*/
// the symbolic property is only known to our cade
let isRead = Symbol("isRead");
messages[0][isRead]= true;
/*
Now third-party code probably won’t see our extra property.

Although symbols allow to lower the probability of problems, using WeakSet is better from the architectural point of view.

Store read dates

There’s an array of messages as in the previous task. The situation is similar.

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

The question now is: which data structure you’d suggest to store the information: “when the message was read?”.

In the previous task we only needed to store the “yes/no” fact. Now we need to store the date, and it should only remain in memory until the message is garbage collected.

P.S. Dates can be stored as objects of built-in Date class, that we’ll cover later.

To store a date, we can use WeakMap:
*/
let readMap = new WeakMap();

readMap.set(messages[0], new Date(2022, 2, 2));
// date objet we'll study later
console.log(readMap);