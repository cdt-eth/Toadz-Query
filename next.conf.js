require("dotenv").config();

module.exports = {
    env: {
        API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    }
}