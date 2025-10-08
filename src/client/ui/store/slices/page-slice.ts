import { createProducer } from "@rbxts/reflex";
import { Pages } from "client/ui/settings/pages";
import { RootState } from "..";

const initState = {
	Page: Pages.None,
	PreviousPage: Pages.None,
	IsLocked: false,
};

export const PageSlice = createProducer(initState, {
	SetPage: (state, page: Pages) => {
		if (state.IsLocked) return state;

		return {
			...state,
			Page: page,
			PreviousPage: state.Page,
		};
	},

	SwitchPage: (state, page: Pages) => {
		if (state.IsLocked) return state;
		return page === state.Page
			? { ...state, Page: Pages.None, PreviousPage: state.Page }
			: { ...state, Page: page, PreviousPage: state.Page };
	},

	ClearPage: (state) => {
		if (state.IsLocked) return state;
		return { ...state, Page: Pages.None, PreviousPage: state.Page };
	},

	SetLockPage: (state, isLocked: boolean) => {
		if (state.IsLocked === isLocked) return state;

		return {
			...state,
			IsLocked: isLocked,
		};
	},
});

export const SelectPage = (state: RootState) => state.page.Page;
export const SelectIsLockedPage = (state: RootState) => state.page.IsLocked;
