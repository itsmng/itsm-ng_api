/**
 * ---------------------------------------------------------------------
 * ITSM-NG
 * Copyright (C) 2022 ITSM-NG and contributors.
 *
 * https://www.itsm-ng.org
 *
 * ---------------------------------------------------------------------
 *
 * LICENSE
 *
 * This file is part of ITSM-NG.
 *
 * ITSM-NG is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * ITSM-NG is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with ITSM-NG. If not, see <http://www.gnu.org/licenses/>.
 * ---------------------------------------------------------------------
 */

import { Test, TestingModule } from '@nestjs/testing';
import { EntityService } from './entity.service';
import { EntityModule } from './entity.module';

describe('EntityService', () => {
  let service: EntityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EntityModule],
    }).compile();

    service = module.get<EntityService>(EntityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all entities', async () => {
    const result = [];
    jest.spyOn(service, 'findAll').mockResolvedValue(result);

    expect(await service.findAll()).toBe(result);
  });

  it('should find an entity by id', async () => {
    const result = { id: 1, name: 'test', parentId: null };
    jest.spyOn(service, 'findById').mockResolvedValue(result);

    expect(await service.findById(1)).toBe(result);
  });

  it('should count entities', async () => {
    const result = 1;
    jest.spyOn(service, 'count').mockResolvedValue(result);

    expect(await service.count()).toBe(result);
  });
});
