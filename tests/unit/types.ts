export type ParsedData = {
  id: string;
  timestamp: number;
  value: number;
  metadata?: Record<string, unknown>;
};

export type DataSourceConfig = {
  url: string;
  apiKey: string;
  timeout?: number;
};

export type ParserOptions = {
  strictMode: boolean;
  validationRules?: {
    minValue?: number;
    maxValue?: number;
  };
};

export enum ParserErrorCode {
  INVALID_DATA = 'INVALID_DATA',
  TIMEOUT = 'TIMEOUT',
  NETWORK_ERROR = 'NETWORK_ERROR',
}

export type ParserError = {
  code: ParserErrorCode;
  message: string;
  details?: Record<string, unknown>;
};

export type ParserResult = {
  success: boolean;
  data?: ParsedData[];
  error?: ParserError;
};