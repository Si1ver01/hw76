const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const nanoid = require("nanoid");
const fs = require("fs");
const router = Router();

router.post(
  "/",
  [
    check("author", "Поле автора не может быть пустым").isLength({ min: 1 }),
    check("message", "Сообщение не может быть пустым").isLength({ min: 1 })
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { author, message } = req.body;

    if (!author || !message) {
      return res
        .status(400)
        .json({ error: "Author and message must be present in the request" });
    }

    const id = nanoid();
    const date = new Date();
    const data = { id, author, message, date };

    fs.writeFileSync(
      `./logMessages/${date.toISOString()}.txt`,
      JSON.stringify(data, 2, 2)
    );

    res.status(200).json(data);
  }
);

router.get("/", (req, res) => {
  const { datetime } = req.query;
  const fileNames = fs.readdirSync("./logMessages");
  const COUNT_LASTMESSAGES = -30;

  if (!datetime) {
    const messages = fileNames
      .slice(COUNT_LASTMESSAGES)
      .map(file => JSON.parse(fs.readFileSync(`./logMessages/${file}`)));

    return res.status(200).json({ messages });
  }

  const filterFileNames = fileNames.filter(file => {
    const fileDate = file.slice(0, -4);
    return new Date(fileDate) - new Date(datetime) > 0;
  });

  const messages = filterFileNames.map(file =>
    JSON.parse(fs.readFileSync(`./logMessages/${file}`))
  );

  return res.status(200).json({ messages });
});

module.exports = router;
