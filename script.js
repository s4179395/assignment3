const gameConfig = [
{
    /* each part of the code as 4 parts, the first part is the initial choice, since this is the start, this would be the choice of starting the experience
    next is the image this image is a visual indicator of what is currently happening in the story
    the third aspect is the prompt, the prompt allows you to read what is happening and finally the last
    aspect is your inventory, this is jut a static image but it feels real as depending on whether you pick up an item or not
    will create two seperate options of the exact same scenario, one where you have the item and one where you don't, this is shown through a visual indicator*/
    choice: "Start",
    image: "room1front.png",
    prompt: "You wake up in a room with a single door. The windows have been boarded up with wood and you have no memory of how you ended up here. How do you proceed?",
    options: ["Continue through the door", "look around the room for possible clues."],
    images: "inventoryempty.png"
},
{
    choice: "look around the room for possible clues.",
    image: "room1back.png",
    prompt: "Looking around the room you notice that it is quite empty. The place is dusty, it seems like it has been abandoned for quite a long time. You notice an oddly shaped object and decide to keep it on hand incase it becomes handy later.",
    options: ["Now continue through the door"],
    images: "inventory0doorkey.png"
    
},
{
    choice: "Now continue through the door",
    image: "room2.png",
    prompt: "The door leads you into a hallway with two doors. Between them seems to be a creature the creature looks unsettling but begins to speak. “One door is safe and one is dangerous. The dangerous option will lead you closer to the exit while the safer option only leads you half the way. Which option would you like to take?” you try to ask the creature more questions but it remains silent, you decide the best course of action would be to continue forward. What door do you choose?",
    options: ["the safe door", "the dangerous door"],
    images: "inventory0doorkey.png"
},
/* there being two options the exact same is deliberate as one you hold an item and one you don't, the way I distinguish the choices 
in the code is by having slightly different wording for each options so the code reads them seperately */
{
    choice: "Continue through the door",
    image: "room2.png",
    prompt: "The door leads you into a hallway with two doors. Between them seems to be a creature the creature looks unsettling but begins to speak. “One door is safe and one is dangerous. The dangerous option will lead you closer to the exit while the safer option only leads you half the way. Which option would you like to take?” you try to ask the creature more questions but it remains silent, you decide the best course of action would be to continue forward. What door do you choose?",
    options: ["safe door", "dangerous door"],
    images: "inventoryempty.png"
},
/* this is the first divulging path, its quite simplstic but the idea is to give the player a choice that gives them a unique experience depending on what option they choose
it allows the player to feel like their decisions will effect the outcome of the story (which it does) */
{
    choice: "the safe door",
    image: "saferoom.png",
    prompt: "You open the safe door. The room looks pleasant, calm and welcoming, there is food laid out for you and you begin to feel your stomach rumble, it feels like you haven’t eaten in days. At the end of the room there seems to be a lock at the door. There’s a note in front of the lock saying “get rid of the food to proceed”. Its ambiguous tone makes you wonder if eating the food is the best option.",
    options: ["Eat food", "Don't eat food"],
    images: "inventory0doorkey.png"
},
{
    choice: "safe door",
    image: "saferoom.png",
    prompt: "You open the safe door. The room looks pleasant, calm and welcoming, there is food laid out for you and you begin to feel your stomach rumble, it feels like you haven’t eaten in days. At the end of the room there seems to be a lock at the door. There’s a note in front of the lock saying “get rid of the food to proceed”. Its ambiguous tone makes you wonder if eating the food is the best option.",
    options: ["Eat the food", "Don't eat the food"],
    images: "inventoryempty.png"
},
{
    choice: "Eat food",
    image: "safeexit.png",
    prompt: "As you're eating the food you notice a key lodged in your food. You decide to grab it and keep it in your pocket. You finish eating the food and it fills you with the energy you need to continue you forward. After finishing the food the door unlocks. Heading through the door you notice the room lock you out immediately the second you step outside. You look ahead and you see a door with the key holder perfectly matching the key you have. As you noticed that the walls begin to close in with spikes popping out of them. You dashed towards the door barely making it open with your key, entering the next room.",
    options: ["now continue onwards"],
    images: "inventory0doorkey1safekey.png"
},
{
    choice: "Eat the food",
    image: "safeexit.png",
    prompt: "As you're eating the food you notice a key lodged in your food. You decide to grab it and keep it in your pocket. You finish eating the food and it fills you with the energy you need to continue you forward. After finishing the food the door unlocks. Heading through the door you notice the room lock you out immediately the second you step outside. You look ahead and you see a door with the key holder perfectly matching the key you have. As you noticed that the walls begin to close in with spikes popping out of them. You dashed towards the door barely making it open with your key, entering the next room.",
    options: ["continue onwards"],
    images: "inventory1key.png"
},
{
/*Because the starting point has been labelled as a choice, if you die in the experience I can send you back to the start with that choice to try again */
    choice: "Don't eat food",
    image: "youdied.png",
    prompt: "You throw the food in the trash can nearby not giving it a second thought. Despite not eating the food the door unlocks and you proceed through to the next room. The next room locks the door from behind, you try to wrestle the door open but you can’t seem to get it to budge, as this happens the walls of the room begin to close in and spikes appear pushing out of the walls, you run to the other side and see a door, but the door needs a key, one you don’t have. Unfortunately your story ends here, please try again.",
    options: ["Start"],
    images: "inventorydead.png"
},
{
    choice: "Don't eat the food",
    image: "youdied.png",
    prompt: "You throw the food in the trash can nearby not giving it a second thought. Despite not eating the food the door unlocks and you proceed through to the next room. The next room locks the door from behind, you try to wrestle the door open but you can’t seem to get it to budge, as this happens the walls of the room begin to close in and spikes appear pushing out of the walls, you run to the other side and see a door, but the door needs a key, one you don’t have. Unfortunately your story ends here, please try again.",
    options: ["Start"],
    images: "inventorydead.png"
},
{
    choice: "dangerous door",
    image: "danger.png",
    prompt: "You open the door towards the dangerous room trying to get that shortcut. The room is full of spikes everywhere ready to crush you with a button that says 15 seconds. A plaque below it states that you have 15 seconds to run to the other side of the room while the spikes are deactivated. The room is about 30m long so it would be a sprint to the next door. The door behind you has been locked so you have no other choice. What do you do?",
    options: ["stay", "run"],
    images: "inventoryempty.png"
},
{
    choice: "the dangerous door",
    image: "danger.png",
    prompt: "You open the door towards the dangerous room trying to get that shortcut. The room is full of spikes everywhere ready to crush you with a button that says 15 seconds. A plaque below it states that you have 15 seconds to run to the other side of the room while the spikes are deactivated. The room is about 30m long so it would be a sprint to the next door. The door behind you has been locked so you have no other choice. What do you do?",
    options: ["decide to stay", "decide to run"],
    images: "inventory0doorkey.png"
},
{
    choice: "stay",
    image: "youdied.png",
    prompt: "You decide not to risk it to sit there. Slowly but surely you go insane. This is the end of your story. Please try again.",
    options: ["Start"],
    images: "inventorydead.png"
},
{
    choice: "decide to stay",
    image: "youdied.png",
    prompt: "You decide not to risk it to sit there. Slowly but surely you go insane. This is the end of your story. Please try again.",
    options: ["Start"],
    images: "inventorydead.png"
},
{
    choice: "run",
    image: "danger2.png",
    prompt: "You press the button and make a dash for it. It’s terrifying but surprisingly much easier than you thought. You make it to the end of the room, push the door open and make it to the next area.",
    options: ["continue onwards"],
    images: "inventoryempty.png"
},
{
    choice: "decide to run",
    image: "danger2.png",
    prompt: "You press the button and make a dash for it. It’s terrifying but surprisingly much easier than you thought. You make it to the end of the room, push the door open and make it to the next area.",
    options: ["now continue onwards"],
    images: "inventory0doorkey.png"
},
{
    choice: "continue onwards",
    image: "newspaperroom.png",
    prompt: "You find yourself in a new room. This room seems mostly empty aside from a newspaper article and an elevator. You pick up the article and read it. It says the following. “Multiple disappearances have been happening in the neighbourhood” You attempt to read more about what neighbourhood, but all the words referring to the location and situation seem vague and almost artificial, you decide to give up on reading the article and focus on escaping. What will you do?",
    options: ["Go up", "Go down"],
    images: "inventoryempty.png"
},
{
    choice: "now continue onwards",
    image: "newspaperroom.png",
    prompt: "You find yourself in a new room. This room seems mostly empty aside from a newspaper article and an elevator. You pick up the article and read it. It says the following. “Multiple disappearances have been happening in the neighbourhood” You attempt to read more about what neighbourhood, but all the words referring to the location and situation seem vague and almost artificial, you decide to give up on reading the article and focus on escaping. What will you do?",
    options: ["now go up", "now go down"],
    images: "inventory0doorkey.png"
},
{
    choice: "now go up",
    image: "emptyroom.png",
    prompt: "You take the elevator up in hopes to escape the area, you open the door to see a room with no door, no way out or anything, it's a completely closed room. What do you do?",
    options: ["Look around empty room", "Go straight down"],
    images: "inventory0doorkey.png"
},
{
    choice: "Go up",
    image: "emptyroom.png",
    prompt: "You take the elevator up in hopes to escape the area, you open the door to see a room with no door, no way out or anything, it's a completely closed room. What do you do?",
    options: ["Look around the empty room", "Go straight back down"],
    images: "inventoryempty.png"
},
{
    choice: "Look around the empty room",
    image: "emptyroom.png",
    prompt: "Looking around you notice something very small on the ground, it's hard to notice but it seems to be a key of some sorts, you decide to pocket it and continue looking around, but there seems to be nothing, what’s your next move?",
    options: ["continue to look around", "now head down"],
    images: "inventory1doorkey.png"
},
{
    choice: "Look around empty room",
    image: "emptyroom.png",
    prompt: "Looking around you notice something very small on the ground, it's hard to notice but it seems to be a key of some sorts, you decide to pocket it and continue looking around, but there seems to be nothing, what’s your next move?",
    options: ["continue looking around", "now go down"],
    images: "inventory2doorkey.png"
},
{
    choice: "continue to look around",
    image: "emptyroom.png",
    prompt: "You continue looking for some reason I the creator can’t fully understand, and you find nothing and decide to go back down",
    options: ["now go down"],
    images: "inventory2doorkey.png"
},
{
    choice: "continue looking around",
    image: "emptyroom.png",
    prompt: "You continue looking for some reason I the creator can’t fully understand, and you find nothing and decide to go back down",
    options: ["now head down"],
    images: "inventory1doorkey.png"
},
/*There are three versions of the room with 4 doors, as there are three combinations of how  */
{
    choice: "now head down",
    image: "room2.png",
    prompt: "You reach the bottom of the trip and exit the elevator. You look forward and see 4 doors, and a note that says “final puzzle”. Door 1 is made of wood, seems a bit run down and barely able to stand together. Door 2 is made of a thick metal and seems like it'd be a hassle to open, door 3 is locked shut with a keyhole needed to enter it and door 4 has a hole next to the handle that seems like it needs something to fit in it. The voice echoes “this is your final choice you need to escape”. What door do you choose? You have access to Door 1, 2 and 3.",
    options: ["Door 1", "Door 2", "Door 3"],
    images: "inventory1doorkey.png"
},
{
    choice: "now go down",
    image: "room2.png",
    prompt: "You reach the bottom of the trip and exit the elevator. You look forward and see 4 doors, and a note that says “final puzzle”. Door 1 is made of wood, seems a bit run down and barely able to stand together. Door 2 is made of a thick metal and seems like it'd be a hassle to open, door 3 is locked shut with a keyhole needed to enter it and door 4 has a hole next to the handle that seems like it needs something to fit in it. The voice echoes “this is your final choice you need to escape”. What door do you choose? You have access to Door 1, 2, 3 and 4.",
    options: ["Door 1", "Door 2", "Door 3", "Door 4"],
    images: "4doors.png"
},
{
    choice: "Go down",
    image: "room2.png",
    prompt: "You reach the bottom of the trip and exit the elevator. You look forward and see 4 doors, and a note that says “final puzzle”. Door 1 is made of wood, seems a bit run down and barely able to stand together. Door 2 is made of a thick metal and seems like it'd be a hassle to open, door 3 is locked shut with a keyhole needed to enter it and door 4 has a hole next to the handle that seems like it needs something to fit in it. The voice echoes “this is your final choice you need to escape”. What door do you choose? You have access to Door 1 and 2.",
    options: ["Door 1", "Door 2"],
    images: "4doors.png"
},
/* I don't give any options at the end here as I want it to be clear its a proper ending, making the audienxce have to refresh the page*/
{
    choice: "Door 1",
    image: "ending1.png",
    prompt: "Door 1 leads to an empty room with a singular door. No answers are given. It feels like everything you’ve worked towards during this journey will amount to just an escape with no answers. Regardless you are thankful to have finally escaped. You open the door and make your way out.",
    options: [""]
},
{
    choice: "Door 2",
    image: "ending2.png",
    prompt: "Door 2 opens to a room that has images of all the rooms you’ve visited, they all look similar to a degree when looking at them all together, almost like they were based on a template. At the end of the room is a door, you use it to escape.",
    options: [""]
},
{
    choice: "Door 3",
    image: "ending3.png",
    prompt: "This door opens to a room that has a mirror. When you look in the mirror you realise you have no face. No defining features. It’s almost like you’re not even a real person. This sends you into a spiral. You never escape.",
    options: [""]
},
{
    choice: "Door 4",
    image: "ending4.png",
    prompt: "The door opens to a black void. There is just one aspect of floating text that says “work in progress” you begin to look at your hands and you realise you don’t look… real. That’s when it dawns on you. Everything in this world is simplistic, pixelated. You are not real. None of this is. This has all been. For nothing.",
    options: [""]
},
{
    choice: "base",
    image: "room2.png",
    prompt: "",
    options: ["Eat the food", "Don't eat the food"]
},
];

/* this is the main set of consts that the experience focuses on, everything you see on screen is related to these */
const prompt = document.querySelector(".prompt");
const chooser = document.querySelector(".chooser");
const actBtn = document.querySelector(".act-btn");
const image = document.querySelector(".image")
const images = document.querySelector(".images")

/* this is the code that grbas the image source and also shows how the opitions work and adds the prompt, basically what sets up
the entire experience */
function act(choice) {
    const configObject = gameConfig.filter(
        config => config.choice === choice 
    )[0]
    prompt.textContent = configObject.prompt;
    chooser.innerHTML = gameConfig
    .filter(config => config.choice === choice)[0]
    .options.map(option => `<option value="${option}">${option}</option>`)
    .join("");
    image.src = configObject.image;
    images.src = configObject.images;
    
}

actBtn.addEventListener("click", () => act(chooser.value));

act("Start");

/* I do think I could apply this concept to a broader project, but I would want to add more interactivity maybe making it more of a point and click adventure
would be fun, but I think the concept itself and the way you choose options, and the consistent aesthetic could create a really interesting interacitve experience. */







