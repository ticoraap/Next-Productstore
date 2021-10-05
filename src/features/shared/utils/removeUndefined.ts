/**
 * 04-03-2021:
 *
 * NextJS can't serialize undefined values returned by getStaticProps.
 * As a workaround we remove all undefined values until this is resolved by NextJs.
 * Issue: https://github.com/vercel/next.js/discussions/11209
 */

 export function removeUndefined<T extends object>(props: T): T {
	return Object.entries(props).reduce((previous, [key, value]) => {
		if (typeof value === 'undefined') {
			return previous;
		}

		return {
			...previous,
			[key]: parseValue(value),
		};
	}, {} as T);
}

function parseValue(value: unknown): unknown {
	if (Array.isArray(value)) {
		return value.map(parseValue).filter((item) => typeof item !== 'undefined');
	}

	if (isPlainObject(value)) {
		return removeUndefined(value);
	}

	return value;
}

/** Check if this is a plain object, so not an Array, Date etc */
function isPlainObject(value: unknown): value is object {
	return (
		typeof value === 'object' && value !== null && value.constructor === Object
	);
}
