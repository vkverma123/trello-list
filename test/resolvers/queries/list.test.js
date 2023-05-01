const { List, Task, ListTaskMembership } = require("../../../src/models");
const ListQueries = require("../../../src/resolvers/query/list");

jest.mock("../../../src/models");

describe("ListQueries", () => {
  describe("lists", () => {
    it("should call List.findAll with the correct options", async () => {
      // Arrange
      const expectedOptions = {
        include: Task,
        required: true,
        order: [[Task, ListTaskMembership, "order", "ASC"]],
      };
      List.findAll.mockResolvedValue([]);

      // Act
      await ListQueries.lists();

      // Assert
      expect(List.findAll).toHaveBeenCalledWith(expectedOptions);
    });

    it("should return an array of lists with tasks in order", async () => {
      // Arrange
      const mockList1 = {
        id: 1,
        title: "List 1",
        createdAt: new Date(),
        updatedAt: new Date(),
        Tasks: [
          {
            id: 1,
            title: "Task 1",
            status: "TODO",
            createdAt: new Date(),
            updatedAt: new Date(),
            ListTaskMembership: {
              id: 1,
              ListId: 1,
              TaskId: 1,
              order: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          },
          {
            id: 2,
            title: "Task 2",
            status: "DONE",
            createdAt: new Date(),
            updatedAt: new Date(),
            ListTaskMembership: {
              id: 2,
              ListId: 1,
              TaskId: 2,
              order: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          },
        ],
      };
      const mockList2 = {
        id: 2,
        title: "List 2",
        createdAt: new Date(),
        updatedAt: new Date(),
        Tasks: [
          {
            id: 3,
            title: "Task 3",
            status: "TODO",
            createdAt: new Date(),
            updatedAt: new Date(),
            ListTaskMembership: {
              id: 3,
              ListId: 2,
              TaskId: 3,
              order: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          },
        ],
      };
      const expectedLists = [mockList1, mockList2];
      List.findAll.mockResolvedValue(expectedLists);

      // Act
      const result = await ListQueries.lists();

      // Assert
      expect(result).toEqual(expectedLists);
    });
  });
});
