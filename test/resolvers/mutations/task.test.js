const { List, Task, ListTaskMembership } = require("../../../src/models");
const { createTask } = require("../../../src/resolvers/mutation/task");

describe("TaskMutations", () => {
  let mockList;
  let mockTask;
  let mockListTaskMembership;

  beforeEach(() => {
    mockList = {
      id: 1,
      name: "Mock List",
      createdAt: new Date(),
      updatedAt: new Date(),
      getTasks: jest.fn(),
    };
    mockTask = {
      id: 1,
      title: "Mock Task",
      status: "todo",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    mockListTaskMembership = {
      ListId: 1,
      TaskId: 1,
      order: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    List.findByPk = jest.fn().mockResolvedValue(mockList);
    Task.create = jest.fn().mockResolvedValue(mockTask);
    ListTaskMembership.findAll = jest
      .fn()
      .mockResolvedValue([mockListTaskMembership]);
    ListTaskMembership.upsert = jest.fn().mockResolvedValue();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("createTask", () => {
    it("should throw an error if listId is not found", async () => {
      List.findByPk = jest.fn().mockResolvedValue(null);

      await expect(
        createTask({}, { title: "New Task", status: "todo", listId: 1 })
      ).rejects.toThrow("List with id 1 not found");
    });
  });
});
