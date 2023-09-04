import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Alcohol } from './gscu/Alcohol.entity';
import { Beverage } from './gscu/Beverage.entity';
import { Candy  } from './gscu/Candy.entity';
import { Frozen } from './gscu/Frozen.entity';
import { Ice } from './gscu/Ice.entity';
import { Instant } from './gscu/Instant.entity';
import { Lifeuse } from './gscu/Lifeuse.entity';
import { Medic } from './gscu/Medic.entity';
import { Milk } from './gscu/Milk.entity';
import { Noodle } from './gscu/Noodle.entity';
import { Onedate } from './gscu/Onedate.entity';
import { Snack } from './gscu/Snack.entity';
import { Tobacco } from './gscu/Tobacco.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Alcohol)
    private Alcohol_ProductRepository: Repository<Alcohol>,
    @InjectRepository(Beverage)
    private beverage_Repository: Repository<Beverage>,
    @InjectRepository(Candy)
    private candy_Repository: Repository<Candy>,
    @InjectRepository(Frozen)
     private frozen_Repository: Repository<Frozen>,
    @InjectRepository(Ice)
    private ice_Repository: Repository<Ice>,
    @InjectRepository(Instant)
    private instant_Repository: Repository<Instant>,
    @InjectRepository(Lifeuse)
    private lifeuse_Repository: Repository<Lifeuse>,
    @InjectRepository(Medic)
    private medic_Repository: Repository<Medic>,
    @InjectRepository(Milk)
    private milk_Repository: Repository<Milk>,
    @InjectRepository(Noodle)
    private noodle_Repository: Repository<Noodle>,
    @InjectRepository(Onedate)
    private onedate_Repository: Repository<Onedate>,
    @InjectRepository(Snack)
    private snack_Repository: Repository<Snack>,
    @InjectRepository(Tobacco)
    private tobacco_Repository: Repository<Tobacco>,

  ) {}

  async findBySidAcrossTables(s_id: string): Promise<{
    alcohols: Alcohol[];
    beverages: Beverage[];
    candys: Candy[];
    frozens: Frozen[];
    ices: Ice[];
    instants: Instant[];
    lifeuses: Lifeuse[];
    medics: Medic[];
    mliks: Milk[];
    noodles: Noodle[];
    onedates: Onedate[];
    snacks: Snack[];
    tobaccos: Tobacco[];
  }> {

   const alcohols = await this.Alcohol_ProductRepository
     .createQueryBuilder('alcohol')
     .where('alcohol.s_id LIKE :s_id', { s_id: `%${s_id}%` })
     .getMany();

    const beverages = await this.beverage_Repository
      .createQueryBuilder('beverage')
      .where('beverage.s_id LIKE :s_id', { s_id: `%${s_id}%` })
      .getMany();
  

    const candys = await this.candy_Repository
      .createQueryBuilder('candy')
      .where('candy.s_id LIKE :s_id', { s_id: `%${s_id}%` })
      .getMany();

      const frozens = await this.frozen_Repository
      .createQueryBuilder('frozen')
      .where('frozen.s_id LIKE :s_id', { s_id: `%${s_id}%` })
      .getMany();

    const ices = await this.ice_Repository
      .createQueryBuilder('ice')
      .where('ice.s_id LIKE :s_id', { s_id: `%${s_id}%` })
      .getMany();


    const instants = await this.instant_Repository
      .createQueryBuilder('instant')
      .where('instant.s_id LIKE :s_id', { s_id: `%${s_id}%` })
      .getMany();
  

    const lifeuses = await this.lifeuse_Repository
      .createQueryBuilder('lifeuse')
      .where('lifeuse.s_id LIKE :s_id', { s_id: `%${s_id}%` })
      .getMany();

    const medics = await this.medic_Repository
      .createQueryBuilder('medic')
      .where('medic.s_id LIKE :s_id', { s_id: `%${s_id}%` })
      .getMany();


    const mliks = await this.milk_Repository
      .createQueryBuilder('milk')
      .where('milk.s_id LIKE :s_id', { s_id: `%${s_id}%` })
      .getMany();

    const noodles = await this.noodle_Repository
      .createQueryBuilder('noodle')
      .where('noodle.s_id LIKE :s_id', { s_id: `%${s_id}%` })
      .getMany();

    const onedates = await this.onedate_Repository
      .createQueryBuilder('onedate')
      .where('onedate.s_id LIKE :s_id', { s_id: `%${s_id}%` })
      .getMany();

    const snacks = await this.snack_Repository
      .createQueryBuilder('snack')
      .where('snack.s_id LIKE :s_id', { s_id: `%${s_id}%` })
      .getMany();
  

    const tobaccos = await this.tobacco_Repository
      .createQueryBuilder('tobacco')
      .where('tobacco.s_id LIKE :s_id', { s_id: `%${s_id}%` })
      .getMany();

  
    const result = {
      alcohols,
      beverages,
      candys,
      frozens,
      ices,
      instants,
      lifeuses,
      medics,
      mliks,
      noodles,
      onedates,
      snacks,
      tobaccos
    };

    return result;
  }
}