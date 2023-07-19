import { gql } from 'apollo-server-core';

export const jobTypeDef = gql`
  enum JobStatus {
    prioritized
    completed
    waiting
    active
    delayed
    failed
    paused
    stuck
    unknown
  }
  enum JobStatusClean {
    prioritized
    completed
    wait
    active
    delayed
    failed
    paused
  }
  type JobLogs {
    count: Int!
    logs: [String]!
  }
  type Job {
    id: ID!
    name: String!
    data: String
    status: JobStatus!
    returnValue: String
    progress: String!
    attemptsMade: Int!
    failedReason: String
    stacktrace: [String]!
    logs: JobLogs
    delay: Float
    timestamp: Float
    finishedOn: Float
    processedOn: Float
    processingTime: Float
    opts: String!
  }
`;
