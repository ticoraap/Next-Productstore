export interface ISearchParams extends Partial<Record<string, string | number>> {
	select?: string;
	query?: string;
	include?: number;
	limit?: number;
}