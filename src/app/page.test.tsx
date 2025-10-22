import { render } from "@testing-library/react";

import Home from "@/src/app/page";

describe(Home.name, () => {
	it("can render", () => {
		render(<Home />);
	});
});
