import { BatchEnums } from './enums/BatchEnums';
import inquirer from "inquirer";

async function run() {

    const { batchSelected } = await inquirer.prompt({
        name: "batchSelected",
        type: "list",
        message: "What batch system would you like to launch? 🚀",
        choices: [BatchEnums.FAKER],
        default: 0,
    });

    if (batchSelected === BatchEnums.FAKER) {
        /**
         * 
         * This is the place where you can add a custom implementation to insert data in the database of your app
         * 
         */
    }

    console.log("Done ✅")

}

run()