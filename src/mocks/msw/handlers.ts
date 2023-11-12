import { http, HttpResponse } from "msw";
import usersMock from "../userMocks/userMocks";
import userMock from "../userMocks/userMock";

export const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}/items`, () => {
    return HttpResponse.json(usersMock);
  }),

  http.patch(`${import.meta.env.VITE_API_URL}/items/1`, () => {
    return HttpResponse.json({
      ...userMock,
      isFriend: !userMock.isFriend,
    });
  }),
];
