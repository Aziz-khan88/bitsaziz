import {google} from "googleapis";


export default async function handler(req, res ) {
    
    res.status(200).json({ name: req.body })


    
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        })



        const sheets = google.sheets({
            auth,
            version: 'v4'
        });

      
        var resource = {
            "values": ["farooq","farooq@gmail.com","123456789"]
        }

        var optionalArgs = {valueInputOption: "USER_ENTERED"};
        var spreadsheetId =  process.env.GOOGLE_SHEET_IDS
      
        try{
            let response =   sheets.spreadsheets.values.append({
                spreadsheetId,
                range: 'A1:C1',
                optionalArgs,
                requestBody: {
                    resource
                }
            });
            res.status(200).json({resource})
        }
        catch (e) {
            return res.status(e.code).send({message: e.message})
        }
    
        

    }catch (e) {
        return res.status(e.code).send({message: e.message})
    }

}
