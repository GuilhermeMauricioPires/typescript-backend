import {Request, Response} from 'express'
import EmailService from "../services/EmailService";

const user = [
    {name: 'Guilherme', email: 'gmauriciopires@gmail.com'},
    {name: 'Teste', email: 'teste@gmail.com'},
    {name: 'asd', email: 'asd@gmail.com'}
];

export default {
    async index(req: Request, res: Response) {
        return res.json(user)
    },
    async create(req: Request, res: Response) {
        const emailService = new EmailService();
        emailService.sendMail({
            to: {name: 'Guilherme Mauricio Pires', email: 'gmauriciopires@gmail.com'},
            message: {subject: 'Bem vindo', body: 'seja bem vindo'}
        });
        return res.send();
    }
};