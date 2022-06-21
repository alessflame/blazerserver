import { travelModel } from "../models/travelModel.js";

export const getAllTravels = async (req, res) => {
  try {
    const travels = await travelModel.find();

    res.json(travels);
  } catch (error) {
    res.json({ message: "errore caricamento viaggi" });
  }
};

export const getTravelByIdAgency = async (req, res) => {
  const { id } = req.params;

  try {
    const filterTravel = await travelModel.find({ id_user: id });

    res.json(filterTravel);
  } catch (error) {
    res.json({
      message: "impossibile caricare i viaggi di questa agenzia, riprova",
    });
  }
};

export const getTravelById = async (req, res) => {
  const { id } = req.params;

  try {
    const findTravel = await travelModel.findById(id);

    res.json(findTravel);
  } catch (error) {
    res.json({
      message: "non è stato possibile trovare questo viaggio, riprova",
    });
  }
};

export const createTravel = async (req, res) => {
  const { name, author, countries, id_user, places_number, price } = req.body;

  try {
    if (
      !name ||
      !author ||
      !countries ||
      !id_user ||
      !places_number ||
      !price
    ) {
      return res.json({ message: "inserisci tutti i campi" });
    }

    const newCountries = countries.split(",");

    if (req.file) {
      const { filename } = req.file;

      // console.log(img);

      let travel = {
        countries: newCountries,
        img_travel: "/cover/" + filename,
        name: name,
        id_user: id_user,
        author: author,
        places_number: places_number,
        price: price,
      };

      const newTravel = new travelModel(travel);
      await newTravel.save();

      return res.json({
        travel: newTravel,
        message: "Nuovo viaggio creato con successo",
        status: 201,
      });
    }
    res.json({ message: "Errore creazione. Inserisci la foto ", status: 400 });
  } catch (error) {
    res.json({ message: "errore, qualcosa è andato storto" });
  }
};
