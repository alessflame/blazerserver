import { blazeTravelModel } from "../models/blazeTravelModel.js";

export const blazeTravelsByUser = async (req, res) => {
  const { id } = req.params;

  try {
    const travelsBlaze = await blazeTravelModel.find({ id_user: id });

    res.json(travelsBlaze);
  } catch (error) {
    res.json({ message: "errore caricamento" });
  }
};

export const createBlazeTravel = async (req, res) => {
  const { id_user, id_travel } = req.body;

  const blaze = { id_user, id_travel };

  try {
    const newBlaze = new blazeTravelModel(blaze);
    await newBlaze.save();

    //  console.log(newBlaze)

    res.json({
      status: 201,
      message: "creato con successo",
      newBlaze: newBlaze,
    });
  } catch (error) {
    res.json({ message: "errore salvataggio viaggio" });
  }
};

export const deleteBlazeTravel = async (req, res) => {
  const { id_travel, id_user } = req.params;

  try {
    const blaze = await blazeTravelModel.findOneAndDelete({
      id_travel,
      id_user,
    });

    res.json({
      deleteBlaze: blaze,
      status: 200,
      message: "eliminato con successo",
    });
  } catch (error) {
    res.json({ message: "errore eliminazione viaggio" });
  }
};
