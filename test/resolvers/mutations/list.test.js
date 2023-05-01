const { List } = require("../../../src/models");
const ListMutations = require("../../../src/resolvers/mutation/list");

// Mock the List model
jest.mock("../../../src/models", () => ({
  List: {
    create: jest.fn(),
  },
}));

describe("ListMutations", () => {
  beforeEach(() => {
    List.create.mockClear();
  });

  describe("createList", () => {
    it("creates a new list with the given title", async () => {
      const title = "Test List";
      const expectedList = { id: 1, title };

      List.create.mockResolvedValueOnce(expectedList);

      const result = await ListMutations.createList(null, { title });

      expect(List.create).toHaveBeenCalledWith({ title });
      expect(result).toEqual(expectedList);
    });
  });
});
