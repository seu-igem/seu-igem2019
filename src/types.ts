export interface IEditor {
   name: string;
   nameAbbr: string;
   hash: string;
   avatar: string;
}

export enum LoadingState {
   NotLoading,
   Loading,
   Loaded,
}
