declare module '*.svg' {
	import React = require('react');
	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement>
	>;
	const src: string;
	export default src;
}
declare module '*.png' {
	const content: string;
	export default content;
}
declare module '*.jpg' {
	const content: string;
	export default content;
}
declare module '*.jpeg' {
	const content: string;
	export default content;
}
declare module '*.webp' {
	const content: string;
	export default content;
}
declare module '*.gif' {
	const content: string;
	export default content;
}
declare module '*.avif' {
	const content: string;
	export default content;
}
declare module '*.json' {
	const content: Record<string, unknown>;
	export default content;
}

declare module '*.module.css' {
	const classes: { [key: string]: string };
	export default classes;
}

declare module '*.module.scss' {
	const classes: { [key: string]: string };
	export default classes;
}

declare module '*.module.sass' {
	const classes: { [key: string]: string };
	export default classes;
}

declare module '*.css' {
	const content: string;
	export default content;
}

declare module '*.scss' {
	const content: string;
	export default content;
}
