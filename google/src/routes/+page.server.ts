import { redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({request,}) => {
        const data = await request.formData();
		const searchQuery = data.get('searchQuery');
        throw redirect(307, `https://www.google.com/search?q=${searchQuery}`);
	}
};
