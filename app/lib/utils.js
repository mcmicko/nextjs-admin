export const connectToDB = async () => {
  const connection = {};
  try {
    if (connection.isConnected) return;

    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connection[0].readyState;
  } catch (err) {
    throw new Error(err);
  }
};
