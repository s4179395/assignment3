const gameConfig = [
{
    choice: "Start",
    image: "room1front.png",
    prompt: "You wake up in a room with a single door. The windows have been boarded up by wood and you have no idea how you got here. How do you proceed?",
    options: ["Continue through the door", "look around the room for possible clues."],
    images: "inventoryempty.png"
},
{
    choice: "look around the room for possible clues.",
    image: "room1back.png",
    prompt: "Looking around the room you notice that it is quite empty. There seems to be a lot of dirt and dust, it seems like the place has been abandoned for quite a long time. There seems to be nothing else. You look towards the door and begin to enter it.",
    options: ["Continue through the door"]
},
{
    choice: "Continue through the door",
    image: "room2.png",
    prompt: "The door leads you into a hallway with two doors. Between them seems to be a creature the creature looks unsettling but begins to speak. “One door is the safe option and one is the dangerous option. The danger option will lead you closer to the exit while the safer option only leads you half the way. Which option would you like to take?” you ponder for a second and then ask the creature how dangerous is the first option. “Many went through the dangerous store thinking they could handle it. Many choose the safe option and think it’s best for survival. Both options have caused many people not to leave the room they enter. It is now time to make your decision. I will give you no more information. Good luck.",
    options: ["safe door", "dangerous door"]
},
{
    choice: "safe door",
    image: "saferoom.png",
    prompt: "You open the safe door. The room looks pleasant, calm and welcoming, there is food laid out for you and you begin to feel your stomach rumble, it feels like you haven’t eaten for days. At the end of the room there seems to be a lock at the door. There’s a note in front of the lock saying “get rid of the food to proceed”. Its ambiguous tone makes you wonder if eating the food is the best option.",
    options: ["Eat the food", "Don't eat the food"]
},
{
    choice: "Eat the food",
    image: "safeexit.png",
    prompt: "As you're eating the food you notice a key lodged in your food. You decide to grab it and keep it in your pocket. You finish eating the food and it fills you with the energy you need to continue you forward. After finishing the food the door unlocks. Heading through the door you notice the room lock you out immediately the second you step outside. You look ahead and you see a door with the key holder perfectly matches the key you have. As you noticed that the walls begin to close when your spikes popping out of them. You dashed towards the door barely making it open opening it and entering the room.",
    options: ["Eat the food", "Don't eat the food"]
},
{
    choice: "Don't eat the food",
    image: "youdied.png",
    prompt: "You throw the food in the trash can nearby not giving it a second thought. Despite not eating the food the door unlocks and you proceed through to the next room. The next room locks the door from behind, you try to wrestle the door open but you can’t seem to get it to budge, as this happens the walls of the room begin to close in and spikes appear pushing out of the walls, you run to the other side and see a door, but the door needs a key, one you don’t have. Unfortunately your story ends here, please try again.",
    options: ["Start"]
},
{
    choice: "dangerous door",
    image: "danger.png",
    prompt: "You open the door towards the dangerous room trying to get that shortcut. The room is full of spikes everywhere ready to crush you with a button that says 15 seconds. A plaque below it states that you have 15 seconds to run to the other side of the room where the spikes are deactivated. The room is about 30 m long so it would be a sprint to the next door. The door behind you has been locked though so you have no other choice. What do you do?",
    options: ["stay", "run"]
},
{
    choice: "stay",
    image: "youdied.png",
    prompt: "You decide not to risk it to sit there. Slowly but surely you go insane. This is the end of your story. Please try again.",
    options: ["Start"]
},
{
    choice: "run",
    image: "danger2.png",
    prompt: "You press the button and make a dash for it. It’s terrifying but surprisingly much easier to deal with. You make it to the end of the room, push the door open and make it to the next area.",
    options: ["continue onwards"]
},
{
    choice: "base",
    image: "room2.png",
    prompt: "",
    options: ["Eat the food", "Don't eat the food"]
},
];

const prompt = document.querySelector(".prompt");
const chooser = document.querySelector(".chooser");
const actBtn = document.querySelector(".act-btn");
const image = document.querySelector(".image")
const images = document.querySelector(".images")

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
    images.src = configObject.image;
    
}

actBtn.addEventListener("click", () => act(chooser.value));

act("Start");

let currentValue = 100;
const root = document.documentElement;





