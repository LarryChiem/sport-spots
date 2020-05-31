import { OpenGymInst } from "../OpenGymInst";
import AliveMMA from "./images/AliveMMA.jpg"; 
import MartialMastersAcademy from "./images/MartialMastersAcademy.jpg"; 
import RenzoGracieJJPortland from "./images/RenzoGracieJJPortland.jpg"; 
import TeamQuestMMA from "./images/TeamQuestMMA.jpg"; 
import PortlandThaiBoxing from "./images/PortlandThaiBoxing.jpg"; 


const gyms = [
      //Sunday gyms
      new OpenGymInst(AliveMMA, "Alive MMA", "5607 SE Woodstock Blvd, Portland, OR 97206", "https://goo.gl/maps/KRKDYxN9XmtGUbBK7", "MMA", "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday", "7:00pm to 9:45pm", "$5, $6.25 (out of district)", "Open", "http://www.alivemma.net", "No pre-registration required on Saturdays. 42 players max limit.", "3", "Indoor", "18", "45.4794109", "-122.6077596"),
      new OpenGymInst(MartialMastersAcademy, "Martial Masters Academy", "2038 NE Aloclek Dr Ste 205, Hillsboro, OR 97124", "https://goo.gl/maps/523EvKqwSaqg8WJB7", "MMA", "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday", "9:00am to 9:50am", "$5", "Open", "http://www.martialmastersacademy.com", "Martial Masters Academy trains athletes and individuals who are looking to achieve their fitness goals, perfect their martial arts skills, and protect themselves from harm. We offer Martial Arts classes, Bootcamp classes, and Youth Martial Arts classes that encourage proper form and doing your best. From fighters to stay-at-home moms, we greet every member with a welcoming, high-energy atmosphere to create the best experience here at Martial Masters Academy.", "1", "Indoor", "Any", "45.5341947", "-122.9005388"),
      new OpenGymInst(RenzoGracieJJPortland, "Renzo Gracie Jiu Jitsu Portland", "833 N Shaver St, Portland, OR 97227", "https://g.page/RenzoGraciePortland?share", "MMA", "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday", "CLOSED", "$13", "Open", "https://www.renzogracieportland.com/brazilian-jiu-jitsu/", "RENZO GRACIE ACADEMY PORTLAND OFFERS WORLD CLASS INSTRUCTION IN A FRIENDLY ENVIRONMENT.WHETHER YOU’RE A SEASONED GRAPPLER OR AN ABSOLUTE BEGINNER, OUR COACHES WILL HELP YOU TO ACHIEVE YOUR PERSONAL JIU JITSU GOALS.", "2", "Indoor", "All Ages", "45.5522254", "-122.6774228"),
      new OpenGymInst(TeamQuestMMA, "Team Quest MMA", "18206 SE Stark St, Portland, OR 97233", "https://goo.gl/maps/Yj6JrnnhA48oexgh9", "MMA", "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday", "CLOSED", "$125 per month", "Open", "https://www.teamquestmma.net", "As we all grapple with the enormous scale and impact of the coronavirus in the U.S, Team Quest is pausing classes until the end of the March. Given the rapidly escalating situation with COVID-19 (Coronavirus) in our community and our strong desire to do our part to keep people safe and healthy, we have decided to close Team Quest in compliance with Federal and State recommendations.", "2", "Indoor", "All Ages", "45.5189836", "-122.4778043"),
      new OpenGymInst(PortlandThaiBoxing, "Portland Thai Boxing", "600 NE Couch St, Portland, OR 97232", "https://goo.gl/maps/w4ZdE1mD23b9tgkM9", "MMA", "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday", "CLOSED", "$13", "Open", "https://www.pdxmuaythai.com", "Portland Thai boxing is a martial arts academy whose mission is to provide our students the very best training, development, support, and education in the arts of Muay Thai, Jiu-Jitsu, Mixed Martial Arts, Kali/JKD", "2", "Indoor", "All Ages", "45.523452", "-122.661613")
];

export default gyms;