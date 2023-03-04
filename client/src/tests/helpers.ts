import { act } from "@testing-library/react";

export async function exitLoadingState() {
  await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
}
