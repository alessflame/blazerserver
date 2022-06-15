import { travelModel } from "../models/travelModel.js";


export const getAllTravels = async(req, res) => {
  
  const travels= await travelModel.find();

  res.json(travels);
};

export const getTravelByIdAgency = async(req, res) => {
  const { id } = req.params;

 const filterTravel= await travelModel.find({id_user:id});

  res.json(filterTravel);
};

export const getTravelById = async(req, res) => {
  const { id } = req.params;

  const findTravel = await travelModel.findById(id);

  res.json(findTravel);
};

export const createTravel = async(req, res) => {
  const { name, author, countries, id_user, places_number, price } = req.body;

  if(!name || !author || !countries || !id_user || !places_number || !price){
    return res.json({message:"inserisci tutti i campi"})

  }

  const newCountries = countries.split(",");

  if(req.file){
  const { filename } = req.file;

  // console.log(img);

  let travel = {
    countries: newCountries,
    img_travel: "/cover/" + filename,
    name:name,
    id_user: id_user,
    author: author,
    places_number: places_number,
    price:price
  };


  const newTravel= new travelModel(travel);
  await newTravel.save();

  return res.json({travel:newTravel, message:"Nuovo viaggio creato con successo", status:201});

  
}
   res.json({ message:"Errore creazione. Inserisci la foto ", status:400});

}
  
