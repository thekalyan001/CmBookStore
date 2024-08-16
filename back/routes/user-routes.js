const { Router } = require("express");
const { signUpController, loginController } = require("../controllers/user-controller");  
const multer = require('multer');
const path = require("path");

//for file upload use multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(`./public/uploads/`));
    },
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
})
const upload = multer({ storage: storage });
const router = Router();

router.post('/signup', upload.single('photo'), signUpController);
router.post('/login', loginController);

module.exports = router;