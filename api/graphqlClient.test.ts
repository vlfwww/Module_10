import axios from "axios";
import { graphqlRequest } from "./graphqlClient";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("graphqlRequest", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  test("should successfully return data if the answer is correct", async () => {
    const mockData = { user: { name: "Test" } };
    mockedAxios.post.mockResolvedValueOnce({ data: { data: mockData } });

    const result = await graphqlRequest("query { user { name } }");

    expect(result).toEqual(mockData);
    expect(mockedAxios.post).toHaveBeenCalled();
  });

  test("should throw an error if the response has an errors fields", async () => {
    const errorMessage = "Error";
    mockedAxios.post.mockResolvedValueOnce({
      data: { errors: [{ message: errorMessage }] },
    });

    await expect(graphqlRequest("query")).rejects.toThrow(errorMessage);
  });

  test("must add Authorization header if there is a token", async () => {
    localStorage.setItem("access_token", "fake-token");
    mockedAxios.post.mockResolvedValueOnce({ data: { data: {} } });

    await graphqlRequest("query");

    expect(mockedAxios.post).toHaveBeenCalledWith(
      "/api/graphql",
      expect.anything(),
      expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: "Bearer fake-token",
        }),
      }),
    );
  });
});
